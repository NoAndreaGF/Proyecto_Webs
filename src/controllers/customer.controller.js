import { CustomerRepository } from '../data/repositories/customer.repository.js';

const customerRepository = new CustomerRepository();

export class CustomerController {
    async create(req, res) {
      
        if(!Object.keys (req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos completos del cliente'
            });
            return;
        }

        // Create customer
        const customer = {
            name: req.body.name,
            lastName: req.body.lastName,
            phone: req.body.phone,
            address: req.body.address,
        };

        // Save customer in database
        await customerRepository.create(
            customer
        ).then((customer) => {
            res.send("Se creo el cliente: " + JSON.stringify(customer, null, 4));
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };

    async update(req, res) {
        const idCustomer = req.params.id;

        if(!Object.keys (req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos a editar del cliente'
            });
            return;
        }

        // Create customer
        const customer = {
            name: req.body.name,
            lastName: req.body.lastName,
            phone: req.body.phone,
            address: req.body.address,
            updatedAt: Date.now(),
        };

        await customerRepository.update(idCustomer, customer)
        .then(() => {
            res.send("Se actualizo el cliente.");
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
            return;
        });

    }

    async findById(req, res) {

        const idCustomer = req.params.id;
        await customerRepository.findById(idCustomer)
        .then((customer) => {
            res.send(customer);
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
    }

    async findAll(req, res) {

        await customerRepository.findAll()
        .then((customers) => {
            res.send(customers);

        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    }

    async delete(req, res){

        const idCustomer = req.params.id;

        await customerRepository.delete(idCustomer)
        .then(() => {
            res.send("Se elimino el cliente.");
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
        
    }
}