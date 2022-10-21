import { OutRepository } from '../data/repositories/out.repository.js';

const outRepository = new OutRepository();

export class OutController {
    async create(req, res) {

        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos completos de la salida'
            });
            return;
        }

        // Create out
        const out = {
            quantity: req.body.quantity,
            date: req.body.date,
            idProduct: req.body.idProduct,
        };

        // Save out in database
        await outRepository.create(
            out
        ).then((out) => {
            res.send("Se creo la salida: " + JSON.stringify(out, null, 4));
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };

    async update(req, res) {
        const idOut = req.params.id;

        if (!Object.keys(req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos a editar de la salida'
            });
            return;
        }

        // Create out
        const out = {
            quantity: req.body.quantity,
            date: req.body.date,
            idProduct: req.body.idProduct,
            updatedAt: Date.now(),
        };

        await outRepository.update(idOut, out)
            .then(() => {
                res.send("Se actualizo la salida.");
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
                return;
            });

    }

    async findById(req, res) {
        const idOut = req.params.id;

        await outRepository.findById(idOut)
            .then((out) => {
                res.send("Se encontro la salida: " + JSON.stringify(out, null, 4));
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });
    }

    async findAll(req, res) {

        await outRepository.findAll()
            .then((out) => {
                res.send("Salidas encontradas: " + JSON.stringify(out, null, 4));
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });

    }

    async delete(req, res) {
        const idOut = req.params.id;

        await outRepository.delete(idOut)
            .then(() => {
                res.send("Se elimino la salida.");
            })
            .catch(() => {
                res.status(500).send({
                    message: 'No se pudo conectar con la base de datos.'
                });
            });

    }
}