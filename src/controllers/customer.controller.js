import { CustomerRepository } from '../data/repositories/customer.repository.js';
import { MiddlewareJWT } from '../jwt/middleware-jwt.js';

const customerRepository = new CustomerRepository();
const middlewareJWT = new MiddlewareJWT();

export class CustomerController {
    async create(req, res) {
        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

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

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);


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

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        const idCustomer = req.params.id;
        await customerRepository.findById(idCustomer)
        .then((customer) => {
            res.send("Se encontro el cliente: " + JSON.stringify(customer, null, 4));
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
    }

    async findAll(req, res) {

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        await customerRepository.findAll()
        .then((customers) => {
            res.send("Clientes encontrados: " + JSON.stringify(customers, null, 4));
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    }

    async delete(req, res){

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

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