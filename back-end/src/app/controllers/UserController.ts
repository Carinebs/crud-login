import { Request, Response, Router } from 'express';
import User  from '../entities/User';
import userRepository from '../repositories/userReposity';
import IUser from '../interfaces/IUsers';

const userRouter = Router(); 


userRouter.post('/user', async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password } = req.body; 
      const user = await userRepository.postUser(name, email, password); 
      return res.status(201).json(user); 
    } catch (error) {
        return res.status(500).json({ error: 'Não foi possível criar o usuário'}); 
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
        return res.status(201).json(user); 
      } catch (error) {
          return res.status(500).json({ error: 'Não foi possível atualizar  usuário'}); 
      }
});

userRouter.delete('/user', async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.body; 
        const user = await userRepository.deleteUser(id); 
        return res.status(201).json('Usuário deletado'); 
      } catch (error) {
          return res.status(500).json({ error: 'Não foi possível deletar usuário'}); 
      }
});


export default userRouter; 