import { UserRepository } from '../data/repositories/user.repository.js';

const userRepository = new UserRepository();

export class UserController {
    async createUser(user) {
        await userRepository.create(user);
    }

    async updateUser(idUser, userData) {
        let userUpdate = await userRepository.findById(idUser);
        if(userUpdate === undefined){
            throw new Error("El usuario no se encuentra definido y no se puede actualizar");
        }
        else if(userUpdate === null){
            throw new Error("El usuario es nulo y no se puede actualizar");
        }

        await userRepository.update(idUser, userData);
    }

    async findByIdUser(idUser) {
        let result = await userRepository.findById(idUser);

        if (result === undefined) {
            throw new Error("El usuario no existe");
        }
        return result;
    }

    async findAllUsers() {
        let result = await userRepository.findAll();

        if (result === undefined) {
            throw new Error("No hay usuarios registrados");
        }
        return result;
    }

    async delete(idUser){
        await userRepository.delete(idUser);
    }

    async verifyUser (username, password) {
        let result = await userRepository.verify(username,password);

        if (result === undefined) {
            throw new Error("El usuario no existe");
        }
        
        return result;
    }
}
