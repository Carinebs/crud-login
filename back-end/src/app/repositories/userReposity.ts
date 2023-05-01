import User from "../entities/User";
import IUser from "../interfaces/IUsers";
import { AppDataSource } from "../../database/data-source";
import bcrypt from 'bcrypt'; 

const userRepository = AppDataSource.getRepository(User); 

const loginUser = async (email: string, password: string) => {
  try {
    if (!email || !password) {
      throw new Error('Dados insuficientes.');
    }
    
    const user = await userRepository.findOne({
      where:
    { email: email}
    });

    if (!user){
      throw new Error('E-mail ou senha incorretos');
    }

    const isMatch = await bcrypt.compare(password, user.password)
  
    if(isMatch){
      return user
    }else{
      throw new Error('E-mail ou senha incorretos');
    }
    
  }catch (error) {
    throw new Error('Erro ao logar usuário');
  }
}


const postUser =  async (name: string, email: string, password: string) => {
  try{
    if (!name || !email || !password) {
      throw new Error('Dados insuficientes.');
    }

    const userSearch = await userRepository.findOne({
      where:
    { email: email}
    });

    if(userSearch){
      throw new Error('Endereço de e-mail já cadastrado');
    }

    let user: User = new User(); 
    const hash_password = await bcrypt.hash(password , 10);

    user.name = name; 
    user.email = email; 
    user.password = hash_password; 
    await userRepository.save(user);
    return 'Usuário incluido com sucesso'
  }catch{
    throw new Error('Erro ao incluir usuário');
  }
   
}

const getUsers =  async (): Promise<IUser[]> => {
    try {
        return await userRepository.find(); 
    }catch (error) {
        console.error(error);
        throw new Error('Erro ao trazer usuário');
    }
}

const updateUser = async (id: number, name: string, email: string, password: string) => {
    try {
      const user = await userRepository.findOne({
        where:
      { id: id}
      });
      
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      
      const userSearch = await userRepository.findOne({
        where:
      { email: email}
      });
  
      if(userSearch){
        throw new Error('Endereço de e-mail já cadastrado');
      }
      const hash_password = await bcrypt.hash(password , 10);

      user.name = name;
      user.email = email;
      user.password = hash_password;
      await userRepository.save(user);
      return user;
    } catch (error) {
      throw new Error('Erro ao atualizar usuário');
    }
  }

const deleteUser =  async (id : number) => {
    try {
        const user = await userRepository.findOne({
          where:
        { id: id}
        });
        
        if (!user) {
          throw new Error('Usuário não encontrado');
        }
        return await userRepository.delete(user);
      } catch (error) {
        console.error(error);
        throw new Error('Erro ao deletar usuário');
      }
}
    



export default {loginUser, postUser, getUsers, updateUser, deleteUser }