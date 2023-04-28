import User from "../entities/User";
import IUser from "../interfaces/IUsers";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User); 

const postUser =  async (name: string, email: string, password: string) => {

    let user: User = new User(); 
    user.name = name; 
    user.email = email; 
    user.password = password; 

    await userRepository.save(user);
}

const getUsers =  async (): Promise<IUser[]> => {
    try {
        return await userRepository.find(); 
    }catch (error) {
        console.error(error);
        throw new Error('Erro ao criar usuário');
    }
}

const updateUser = async (id: number, name: string, email: string, password: string) => {
    try {
      const user = await userRepository.findOne({
        select: ['id'],
        where: {
          id,
        },
      });
      
      if (!user) {
        throw new Error('Usuário não encontrado');
      }
      user.name = name;
      user.email = email;
      user.password = password;
      await userRepository.save(user);
      return user;
    } catch (error) {
      console.error(error);
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
    



export default {postUser, getUsers, updateUser, deleteUser }