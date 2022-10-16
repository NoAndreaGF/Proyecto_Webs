import { db } from '../../models/models.js';

const User = db.user;

export class UserRepository {

    async create(user) {
        return await User.create(user);
    };

    async update(id, userData) {
        let userUpdate = await User.findByPk(id);
        // Validation
        if(userUpdate === undefined){
            throw new Error("El usuario no se encuentra definido y no se puede actualizar");
        }
        else if(userUpdate === null){
            throw new Error("El usuario es nulo y no se puede actualizar");
        }
        return await User.update(userData, {
            where: {
                id
            }
        });
    };

    async findById(id) {
        let result = await User.findByPk(
            id, 
        );

        // Validation
        if (result === null) {
            throw new Error("El usuario no existe");
        }
        return result;
    };

    async findAll() {
        let result =  await User.findAll({
            attributes: ["id", "username", "createdAt", "updatedAt"],
        });

        // Validation
        if (result === null) {
            throw new Error("No hay usuarios registrados");
        }
        return result;
    };

    async delete(id) {
        await User.destroy({ 
            where: {
                id
            } 
        });
    };

}