import { db } from '../../models/models.js';

const RelProductOrder = db.relProductOrder;

export class RelProductOrderRepository {

    async create(relProductOrder) {
        return await RelProductOrder.create(relProductOrder);
    };

    async update(idRel, relProductOrderData) {
        await RelProductOrder.update(relProductOrderData, {
            where: {
                idRel
            }
        });
    };

    async findById(idRel) {
        return await RelProductOrder.findByPk(idRel, {
            include:["product", "order"],
        });
    };

    async findAll() {
        return await RelProductOrder.findAll({
            attributes: ["idRel", "quantity", "price", "createdAt", "updatedAt"],
            include:["product", "order"],
        });
    }

    async delete(idRel) {
        await RelProductOrder.destroy({ 
            where: {idRel} 
        });
    }
}