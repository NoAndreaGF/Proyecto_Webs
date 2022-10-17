import { RelProductOrderRepository } from '../data/repositories/relProductOrder.repository.js';
import { MiddlewareJWT } from '../middlewares/jwt.middleware.js';

const relProductOrderRepository = new RelProductOrderRepository();
const middlewareJWT = new MiddlewareJWT();

export class RelProductOrderController {
    async create(req, res) {

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos completos de la relación'
            });
            return;
        }

        // Create relProductOrder
        const rel = {
            quantity: req.body.quantity,
            price: req.body.price,
            idProduct: req.body.idProduct,
            idOrder: req.body.idOrder,
        };

        // Save relProductOrder in database
        await relProductOrderRepository.create(
            rel
        ).then((rel) => {
            res.send("Se creo la relación: " + JSON.stringify(rel, null, 4));
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };

    async update(req, res) {
        const idRel = req.params.id;

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);


        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos a editar de la relación'
            });
            return;
        }

        // Create relProductOrder
        const rel = {
            quantity: req.body.quantity,
            price: req.body.price,
            idProduct: req.body.idProduct,
            idOrder: req.body.idOrder,
            updatedAt: Date.now(),
        };

        await relProductOrderRepository.update(idRel, rel)
            .then(() => {
                res.send("Se actualizo la relación.");
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
                return;
            });

    }

    async findById(req, res) {
        const idRel = req.params.id;

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        await relProductOrderRepository.findById(idRel)
            .then((rel) => {
                res.send("Se encontro la relación: " + JSON.stringify(rel, null, 4));
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

        await relProductOrderRepository.findAll()
            .then((rel) => {
                res.send("Relaciones encontradas: " + JSON.stringify(rel, null, 4));
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });

    }

    async delete(req, res) {
        const idRel = req.params.id;

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        await relProductOrderRepository.delete(idRel)
            .then(() => {
                res.send("Se elimino la relación.");
            })
            .catch((err) => {
                res.status(500).send({
                    message: err.message || 'No se pudo conectar con la base de datos.'
                });
            });

    }
}