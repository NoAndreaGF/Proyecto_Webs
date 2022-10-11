import { OrderRepository } from '../data/repositories/order.repository.js';

const orderRepository = new OrderRepository();

export class OrderRepository {
    async createOrder(order) {
        await orderRepository.create(order);
    }

    async updateOrder(idOrder, orderData) {
        let orderUpdate = await orderRepository.findById(idOrder);
        if(orderUpdate === undefined){
            throw new Error("La orden no se encuentra definida y no se puede actualizar");
        }
        else if(orderUpdate === null){
            throw new Error("La orden es nula y no se puede actualizar");
        }

        await orderRepository.update(idOrder, orderData);
    }

    async findByIdOrder(idOrder) {
        let result = await orderRepository.findById(idOrder);

        if (result === undefined) {
            throw new Error("La orden no existe");
        }
        return result;
    }

    async findAllOrders() {
        let result = await orderRepository.findAll();

        if (result === undefined) {
            throw new Error("No hay ordenes registradas");
        }
        return result;
    }

    async delete(idOrder){
        await orderRepository.delete(idOrder);
    }
}