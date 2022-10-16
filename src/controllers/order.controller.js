import { OrderRepository } from '../data/repositories/order.repository.js';

const orderRepository = new OrderRepository();

export class OrderController {
    async create(req, res) {
        // Validate request
        if(!Object.keys (req.body).length) {
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
            idCustomer : req.body.idCustomer,
        };

        // Save order in database
        await orderRepository.create(
            order
        ).then((order) => {
            res.send("Se creo la orden: " + JSON.stringify(order, null, 4));
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };

    async update(req, res) {
        const idOrder = req.params.id;

        // Validate request
        if(!Object.keys (req.body).length) {
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
            idCustomer : req.body.idCustomer,
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
            res.send("Se encontro la orden: " + JSON.stringify(order, null, 4));
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
            res.send("Ordenes encontradas: " + JSON.stringify(orders, null, 4));
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    }

    async delete(req, res){
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
}