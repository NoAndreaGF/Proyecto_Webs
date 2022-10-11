import { db } from '../../models/models.js';

const Order = db.order;

export class OrderRepository {

    create = async (order) => {
        return await Order.create(
            order
        ).then((order) => {
            console.log("Se creo la orden: " + JSON.stringify(order, null, 4));
            return order;
        }).catch((err) => {
            console.error("Error al crear la orden: ", err)
        });
    };

    update = async (idOrder, orderData) => {
        return await Order.update(orderData, {
            where: {
                idOrder
            }
        }).then((order) => {
            console.log("Se actualizó la orden: " + JSON.stringify(order, null, 4));
            return order;
        }).catch((err) => {
            console.error("Error al actualizar la orden: ", err)
        });
    };

    findById = async (idOrder) => {
        return await Order.findByPk(idOrder, {
            include:["customer", "products"]
        }).then((order) => {
           return order;
        }).catch((err) => {
           console.error("Error al buscar orden: ", err);
        });
    };

    findAll = async () => {
        return await Order.findAll({
            attributes: ["idOrder", "orderDate", "deliveryDate", "status", "totalAmount", "idCustomer", "createdAt", "updatedAt"],
            include:["customer"],
        }).then((orders) => {
           return orders;
        });
    };

    delete = async (idOrder) => {
        await Order.destroy({ 
            where: {idOrder} 
        }).then((idOrder) => {
            console.log("Se eliminó la orden: " + JSON.stringify(idOrder, null, 4));
        }).catch((err) => {
            console.error("Error al eliminar la orden: ", err)
        });
    };

}