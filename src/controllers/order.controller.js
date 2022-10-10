import { db } from "../models/models.js";

const Order = db.order;

const createOrder = (idCustomer, order) => {
    return Order.create({
        orderDate: order.orderDate,
        deliveryDate: order.deliveryDate,
        status: order.status,
        totalAmount: order.totalAmount,
        idCustomer: idCustomer,
    }).then((order) => {
       console.log("Se creo la orden: " + JSON.stringify(order, null, 4));
       return order;
    }).catch((err) => {
       console.error("Error al crear el cliente: ", err)
    });
};

const findByIdOrder = (idOrder) => {
    return Order.findByPk(idOrder, {include:["customer"]})
   .then((order) => {
      return order;
   }).catch((err) => {
      console.error("Error al buscar orden: ", err);
   });
};

const findAllOrder = () => {
    return Order.findAll({
        include:["customer"],
    }).then((customers) => {
       return customers;
    });
};

const updateOrder = (idOrder, orderData) => {
    return Order.update(orderData, {
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

const dropOrder = (idOrder) => {
    return Order.destroy({ 
        where: {idOrder} 
    }).then((idOrder) => {
        console.log("Se eliminó la orden: " + JSON.stringify(idOrder, null, 4));
     }).catch((err) => {
        console.error("Error al eliminar la orden: ", err)
     });
};

export { createOrder, findAllOrder, findByIdOrder, updateOrder, dropOrder };