import { db } from '../../models/models.js';

const In = db.in;

export class InRepository {

    create = async (inObject) => {
        await In.create(
            inObject
        ).then((inObject) => {
            console.log("Se creo la entrada: " + JSON.stringify(inObject, null, 4));
        return inObject;
        }).catch((err) => {
            console.error("Error al crear la entrada: ", err)
        });
    };

    update = async (idIn, inData) => {
        await In.update(inData, {
            where: {
                idIn
            }
        }).then((inObject) => {
            console.log("Se actualizó la entrada: " + JSON.stringify(inObject, null, 4));
            return inObject;
        }).catch((err) => {
            console.error("Error al actualizar la entrada: ", err)
        });
    };

    findById = async (idIn) => {
        await In.findByPk(idIn, {
            include:["product"]
        }).then((inObject) => {
           return inObject;
        }).catch((err) => {
           console.error("Error al buscar entrada: ", err);
        });
    };

    findAll = async () => {
        await In.findAll({
            attributes: ["idIn", "quantity", "date", "createdAt", "updatedAt"],
            include:["product"],
        }).then((inObjects) => {
           return inObjects;
        });
    };

    delete = async (idIn) => {
        await  In.destroy({ 
            where: {idIn} 
        }).then((idIn) => {
            console.log("Se eliminó la entrada: " + JSON.stringify(idIn, null, 4));
        }).catch((err) => {
            console.error("Error al eliminar la entrada: ", err)
        });
    };

}