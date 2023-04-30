import { Request, Response, Router } from 'express';
import User  from '../entities/User';
import userRepository from '../repositories/userReposity';
import jsonwebtoken from 'jsonwebtoken'; 
import * as dotenv from 'dotenv'
const userRouter = Router(); 



userRouter.post('/login', async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, password } = req.body; 
      const user = await userRepository.loginUser(name, password); 
      const token = jsonwebtoken.sign(user, "T@mNzK1$csd3d");
      res.cookie('token',token)
      return res.status(201).json(user);  
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao autenticar usuário'}); 
    }
});

userRouter.post('/loged', async (req: Request, res: Response): Promise<Response> => {
    try {
      const auth = req.cookies.token || null; 

      if(!auth){
        return res.status(401).json('Não Autorizado');
      }
      try{
        const token = await jsonwebtoken.verify(auth, "T@mNzK1$csd3d" );
        return res.status(200).json('Usuário autenticado');
      }catch(err){
        return res.status(401).json('Não Autorizado');
      }

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao autenticar usuário'}); 
    }
});


userRouter.post('/login', async (req: Request, res: Response): Promise<Response> => {
    try {
      const auth = req.cookies.token || null; 

      if(!auth){
        return res.status(401).json('Não Autorizado');
      }
      try{
        const token = await jsonwebtoken.verify(auth, "T@mNzK1$csd3d" );
        return res.status(200).json('Usuário autenticado');
      }catch(err){
        return res.status(401).json('Não Autorizado');
      }

    } catch (error) {
        return res.status(500).json({ error: 'Erro ao autenticar usuário'}); 
    }
});

userRouter.post('/logOff', async (req: Request, res: Response)=> {
        res.clearCookie('token'); 
        res.redirect('/')
        return res.status(200).json('Usuário deslogado');
});



userRouter.post('/registration', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { name, email, password } = req.body; 
        const user = await userRepository.postUser(name, email, password); 
        return res.status(200).json(user); 
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao criar usuário'}); 
    }
});

userRouter.get('/', async (_req: Request, res: Response): Promise<Response> => {
    const users = await userRepository.getUsers();
    return res.status(200).json(users);
});

userRouter.put('/user', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id, name, email, password } = req.body; 
        const user = await userRepository.updateUser(id, name, email, password); 
        return res.status(201).json("Usuário atualizado"); 
      } catch (error) {
          return res.status(500).json({ error: 'Erro ao atualizar usuário'}); 
      }
});

userRouter.delete('/user', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.body; 
        const user = await userRepository.deleteUser(id); 
        return res.status(201).json('Usuário deletado'); 
      } catch (error) {
          return res.status(500).json({ error: 'Erro ao deletar usuário'}); 
      }
});


export default userRouter; 