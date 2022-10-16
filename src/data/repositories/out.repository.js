import { db } from '../../models/models.js';

const Out = db.out;

export class OutRepository {

    async create(outObject) {
        return await Out.create(outObject);
    };

    async update(idOut, outData) {
        let outUpdate = await Out.findByPk(idOut);
        // Validation
        if(outUpdate === undefined){
            throw new Error("La salida no se encuentra definida y no se puede actualizar");
        }
        else if(outUpdate === null){
            throw new Error("La salida es nula y no se puede actualizar");
        }

        await Out.update(outData, {
            where: {
                idOut
            }
        });
    };

    async findById(idOut) {
        let result =  await Out.findByPk(idOut, {
            include:["product"]
        });

        // Validation
        if (result === null) {
            throw new Error("La salida no existe");
        }
        return result;
    };

    findAll = async () => {
        let result = await Out.findAll({
            attributes: ["idOut", "quantity", "date", "createdAt", "updatedAt"],
            include:["product"],
        });

        // Validation
        if (result === null) {
            throw new Error("No hay salidas registradas");
        }
        return result;
    };

    async delete(idOut) {
        await Out.destroy({ 
            where: {idOut} 
        });
    }

}