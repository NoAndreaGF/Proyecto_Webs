import { db } from '../../models/models.js';

const Order = db.order;

export class OrderRepository {

    async create(order) {
        return await Order.create(order);
    };

    async update(idOrder, orderData) {
        await Order.update(orderData, {
            where: {
                idOrder
            }
        });
    };

    async findById(idOrder) {
        return await Order.findByPk(idOrder, {
            include:["customer", "products"]
        });
    };

    async findAll() {
        return await Order.findAll({
            attributes: ["idOrder", "orderDate", "deliveryDate", "status", "totalAmount", "idCustomer", "createdAt", "updatedAt"],
            include:["customer"],
        });
    };

    async delete(idOrder) {
        await Order.destroy({ 
            where: {idOrder} 
        });
    };

}