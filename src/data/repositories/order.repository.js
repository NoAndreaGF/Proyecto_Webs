import { db } from '../../models/models.js';

const Order = db.order;

export class OrderRepository {
    async create(order) {
        return await Order.create(order);
    };

    async update(idOrder, orderData) {
        let orderUpdate = await Order.findByPk(idOrder);
        // Validation
        if(orderUpdate === undefined){
            throw new Error("La orden no se encuentra definida y no se puede actualizar");
        }
        else if(orderUpdate === null){
            throw new Error("La orden es nula y no se puede actualizar");
        }

        await Order.update(orderData, {
            where: {
                idOrder
            }
        });
    };

    async findById(idOrder) {
        let result = await Order.findByPk(idOrder, {
            include:["customer", "products"]
        });

        // Validation
        if (result === null) {
            throw new Error("La orden no existe");
        }
        return result;
    };

    async findAll() {
        let result =  await Order.findAll({
            attributes: ["idOrder", "orderDate", "deliveryDate", "status", "totalAmount", "idCustomer", "createdAt", "updatedAt"],
            include:["customer"],
        });

        // Validation
        if (result === null) {
            throw new Error("No hay ordenes registradas");
        }
        return result;
    };

    async delete(idOrder) {
        await Order.destroy({ 
            where: {idOrder} 
        });
    };

}