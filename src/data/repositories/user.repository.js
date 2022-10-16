import { db } from '../../models/models.js';

const User = db.user;

export class UserRepository {

    create = async (user) => {
        return await User.create(
            user
        ).then((user) => {
            console.log("Se creo el usuario: " + JSON.stringify(user, null, 4));
            return user;
        }).catch((err) => {
            console.error("Error al crear el usuario: ", err)
        });
    };

    update = async (idUser, userData) => {
        return await User.update(userData, {
            where: {
                idUser
            }
        }).then((user) => {
            console.log("Se actualizó el usuario: " + JSON.stringify(user, null, 4));
            return user;
        }).catch((err) => {
            console.error("Error al actualizar el usuario: ", err)
        });
    };

    findById = async (idUser) => {
        return await User.findByPk(
            idUser, 
        ).then((user) => {
           return user;
        }).catch((err) => {
           console.error("Error al buscar usuario: ", err);
        });
    };

    findAll = async () => {
        return await User.findAll({
            attributes: ["id", "username", "password", "createdAt", "updatedAt"],
        }).then((users) => {
           return users;
        });
    };

    delete = async (idUser) => {
        await User.destroy({ 
            where: {idUser} 
        }).then((idUser) => {
            console.log("Se eliminó el usuario: " + JSON.stringify(idUser, null, 4));
         }).catch((err) => {
            console.error("Error al eliminar el usuario: ", err)
        });
    };

    verify = async (user, password) => {
        return await User.findOne({
            where: {
                username: user,
                password: password
            }
        }).then((user) => {
            console.log("Se verifico el usuario: " + JSON.stringify(user, null, 4));
            return user;
        }).catch((err) => {
            console.error("Error al  el usuario: ", err);
        });
    };


}