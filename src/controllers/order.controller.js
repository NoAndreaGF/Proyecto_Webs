import { OrderRepository } from '../data/repositories/order.repository.js';

const orderRepository = new OrderRepository();


export class OrderController {
    async create(req, res) {

        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos completos de la orden'
            });
            return;
        }

        // Create order
        const order = {
            orderDate: req.body.orderDate,
            deliveryDate: req.body.deliveryDate,
            status: req.body.status,
            totalAmount: req.body.totalAmount,
            idCustomer: req.body.idCustomer,
        };

        // Save order in database
        await orderRepository.create(
            order
        ).then((order) => {
            res.send(order);
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };

    async update(req, res) {
        const idOrder = req.params.id;

        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos a editar de la orden'
            });
            return;
        }

        // Create order
        const order = {
            orderDate: req.body.orderDate,
            deliveryDate: req.body.deliveryDate,
            status: req.body.status,
            totalAmount: req.body.totalAmount,
            idCustomer: req.body.idCustomer,
            updatedAt: Date.now(),
        };

        await orderRepository.update(idOrder, order)
            .then(() => {
                res.send("Se actualizó la orden.");
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
                return;
            });

    }

    async findById(req, res) {
        const idOrder = req.params.id;

        await orderRepository.findById(idOrder)
            .then((order) => {
                res.send(order);
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });
    }

    async findAll(req, res) {

        await orderRepository.findAll()
            .then((orders) => {
                res.send(orders);
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });

    }

    async delete(req, res) {
        const idOrder = req.params.id;

        await orderRepository.delete(idOrder)
            .then(() => {
                res.send("Se elimino la orden.");
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });
    }

    async findBySearch(req, res) {
        const search = req.params.search;
        await orderRepository.findBySearch(search)
            .then((orders) => {
                res.send(orders);
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });
    }

}