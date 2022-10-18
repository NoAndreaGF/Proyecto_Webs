import { db } from '../../models/models.js';

const User = db.user;

export class UserRepository {

    async create(user) {
        return await User.create(user);
    };

    async update(id, userData) {
        return await User.update(userData, {
            where: {
                id
            }
        });
    };

    async findById(id) {
        return await User.findByPk(
            id, 
        );
    };

    async findAll() {
        return await User.findAll({
            attributes: ["id", "username", "createdAt", "updatedAt"],
        });
    };

    async delete(id) {
        await User.destroy({ 
            where: {
                id
            } 
        });
    };

    verify = async (username, password) => {
        return await User.findOne({
            where: {
                username: username,
                password: password
            }
        }).then((user) => {

            if(user != null){
                console.log("Se verifico el usuario: " + username);
                return user;
            }

        }).catch((err) => {
            console.error("Error al  el usuario: ", err);
        });
    };


}