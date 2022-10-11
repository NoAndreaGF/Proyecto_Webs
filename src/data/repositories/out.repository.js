import { db } from '../../models/models.js';

const Out = db.out;

export class OutRepository {

    create = async (outObject) => {
        return await Out.create(
            outObject
        ).then((outObject) => {
            console.log("Se creo la salida: " + JSON.stringify(outObject, null, 4));
            return outObject;
        }).catch((err) => {
            console.error("Error al crear la salida: ", err)
        });
    };

    update = async (idOut, outData) => {
        return await Out.update(outData, {
            where: {
                idOut
            }
        }).then((outObject) => {
            console.log("Se actualizó la salida: " + JSON.stringify(outObject, null, 4));
            return outObject;
        }).catch((err) => {
            console.error("Error al actualizar la salida: ", err)
        });
    };

    findById = async (idOut) => {
        return await Out.findByPk(idOut, {
            include:["product"]
        }).then((outObject) => {
           return outObject;
        }).catch((err) => {
           console.error("Error al buscar salida: ", err);
        });
    };

    findAll = async () => {
        return await Out.findAll({
            attributes: ["idOut", "quantity", "date", "createdAt", "updatedAt"],
            include:["product"],
        }).then((outObjects) => {
           return outObjects;
        });
    };

    delete = async (idOut) => {
        await Out.destroy({ 
            where: {idOut} 
        }).then((idOut) => {
            console.log("Se eliminó la salida: " + JSON.stringify(idOut, null, 4));
        }).catch((err) => {
            console.error("Error al eliminar la salida: ", err)
        });
    };

}