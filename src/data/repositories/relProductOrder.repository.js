import { db } from '../../models/models.js';

const RelProductOrder = db.relProductOrder;

export class RelProductOrderRepository {

    async create(relProductOrder) {
        return await RelProductOrder.create(relProductOrder);
    };

    async update(idRel, relProductOrderData) {
        let relUpdate = await RelProductOrder.findByPk(idRel);
        // Validation
        if(relUpdate === undefined){
            throw new Error("La relación no se encuentra definida y no se puede actualizar");
        }
        else if(relUpdate === null){
            throw new Error("La relación es nula y no se puede actualizar");
        }

        await RelProductOrder.update(relProductOrderData, {
            where: {
                idRel
            }
        });
    };

    async findById(idRel) {
        let result = await RelProductOrder.findByPk(idRel, {
            include:["product", "order"],
        });

        // Validation
        if (result === null) {
            throw new Error("El relación no existe");
        }
        return result;
    };

    async findAll() {
        let result = await RelProductOrder.findAll({
            attributes: ["idRel", "quantity", "price", "createdAt", "updatedAt"],
            include:["product", "order"],
        });

        // Validation
        if (result === null) {
            throw new Error("No hay relaciones registrados");
        }
        return result;
    }

    async delete(idRel) {
        await RelProductOrder.destroy({ 
            where: {idRel} 
        });
    }
}