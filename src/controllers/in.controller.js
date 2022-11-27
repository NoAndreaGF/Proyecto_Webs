import { InRepository } from '../data/repositories/in.repository.js';

const inRepository = new InRepository();

export class InController {
    async create(req, res) {

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
        
        await inRepository.findById(idIn)
        .then((inObject) => {
            res.send(inObject);
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
    }

    async findAll(req, res) {

        await inRepository.findAll()
        .then((inObjects) => {
            res.send(inObjects);
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    }

    async delete(req, res){
        const idIn = req.params.id;

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