import { db } from '../../models/models.js';

const In = db.in;

export class InRepository {

    async create(inObject) {
        return await In.create(inObject);
    };

    async update(idIn, inData) {
        let inUpdate = await In.findByPk(idIn);
        // Validation
        if(inUpdate === undefined){
            throw new Error("La entrada no se encuentra definida y no se puede actualizar");
        }
        else if(inUpdate === null){
            throw new Error("La entrada es nula y no se puede actualizar");
        }

        await In.update(inData, {
            where: {
                idIn
            }
        });
    };

    async findById(idIn) {
        let result = await In.findByPk(idIn, {
            include:["product"]
        });

        // Validation
        if (result === null) {
            throw new Error("La entrada no existe");
        }
        return result;
    };

    async findAll() {
        let result = await In.findAll({
            attributes: ["idIn", "quantity", "date", "createdAt", "updatedAt"],
            include:["product"],
        });

        // Validation
        if (result === null) {
            throw new Error("No hay entradas registradas");
        }
        return result;
    };

    async delete(idIn) {
        await In.destroy({ 
            where: {idIn} 
        });
    };

}