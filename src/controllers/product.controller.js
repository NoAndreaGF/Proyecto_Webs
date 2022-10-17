import { ProductRepository } from '../data/repositories/product.repository.js';
import { MiddlewareJWT } from '../middlewares/jwt.middleware.js';

const productRepository = new ProductRepository();
const middlewareJWT = new MiddlewareJWT();

export class ProductController {
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
                message: 'Se necesitan los datos completos del producto'
            });
            return;
        }

        // Create product
        const product = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
        };

        // Save product in database
        await productRepository.create(
            product
        ).then((product) => {
            res.send("Se creo el producto: " + JSON.stringify(product, null, 4));
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };

    async update(req, res) {
        const idProduct = req.params.id;

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
                message: 'Se necesitan los datos a editar del producto'
            });
            return;
        }

        // Create product
        const product = {
            name: req.body.name,
            brand: req.body.brand,
            description: req.body.description,
            price: req.body.price,
            stock: req.body.stock,
            updatedAt: Date.now(),
        };

        await productRepository.update(idProduct, product)
            .then(() => {
                res.send("Se actualizo el producto.");
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
                return;
            });

    }

    async findById(req, res) {
        const idProduct = req.params.id;

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        await productRepository.findById(idProduct)
            .then((product) => {
                res.send("Se encontro el producto: " + JSON.stringify(product, null, 4));
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

        await productRepository.findAll()
            .then((products) => {
                res.send("Productos encontrados: " + JSON.stringify(products, null, 4));
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });

    }

    async delete(req, res) {
        const idProduct = req.params.id;

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        await productRepository.delete(idProduct)
            .then(() => {
                res.send("Se elimino el producto.");
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });

    }
}