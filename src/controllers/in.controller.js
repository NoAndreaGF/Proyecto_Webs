import { InRepository } from '../data/repositories/in.repository.js';
import { MiddlewareJWT } from '../middlewares/jwt.middleware.js';

const inRepository = new InRepository();
const middlewareJWT = new MiddlewareJWT();

export class InController {
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
                message: 'Se necesitan los datos completos de la entrada'
            });
            return;
        }

        // Create in
        const inObject = {
            quantity: req.body.quantity,
            date: req.body.date,
            idProduct : req.body.idProduct,
        };

        // Save in in database
        await inRepository.create(
            inObject
        ).then((inObject) => {
            res.send("Se creo la entrada: " + JSON.stringify(inObject, null, 4));
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };
    
    async update(req, res) {
        const idIn = req.params.id;

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
                message: 'Se necesitan los datos a editar de la entrada'
            });
            return;
        }

        // Create in
        const inObject = {
            quantity: req.body.quantity,
            date: req.body.date,
            idProduct : req.body.idProduct,
            updatedAt: Date.now(),
        };

        await inRepository.update(idIn, inObject)
        .then(() => {
            res.send("Se actualizo la entrada.");
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
            return;
        });

    }

    async findById(req, res) {
        const idIn = req.params.id;
        
        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        await inRepository.findById(idIn)
        .then((inObject) => {
            res.send("Se encontro la entrada: " + JSON.stringify(inObject, null, 4));
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

        await inRepository.findAll()
        .then((inObjects) => {
            res.send("Entradas encontradas: " + JSON.stringify(inObjects, null, 4));
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    }

    async delete(req, res){
        const idIn = req.params.id;

        // Validate request
        const token = req.headers['x-access-token'];

        if (!token) return res.status(401)
            .send({
                auth: false,
                message: 'No token provided.'
            });

        middlewareJWT.verifyJWT(token);

        await inRepository.delete(idIn)
        .then(() => {
            res.send("Se elimino la entrada.");
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
        
    }
}