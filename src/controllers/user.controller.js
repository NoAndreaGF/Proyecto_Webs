import { UserRepository } from '../data/repositories/user.repository.js';
import { MiddlewareJWT } from '../jwt/middleware-jwt.js';

const userRepository = new UserRepository();
const middlewareJWT = new MiddlewareJWT();

export class UserController {
    async create(req, res) {
        // Validate request
        if(!Object.keys (req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos completos del usuario'
            });
            return;
        }

        // Create user
        const user = {
            username: req.body.username,
            password: req.body.password,
        };

        // Save user in database
        await userRepository.create(
            user
        ).then((user) => {
            res.send("Se creo el usuario: " + JSON.stringify(user, null, 4));
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    };

    async update(req, res) {
        const idUser = req.params.id;

        // Validate request
        if(!Object.keys (req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos a editar del usuario'
            });
            return;
        }

        // Create user
        const user = {
            username: req.body.username,
            password: req.body.password,
            updatedAt: Date.now(),
        };

        await userRepository.update(idUser, user)
        .then(() => {
            res.send("Se actualizo el usuario.");
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
            return;
        });

    }

    async findById(req, res) {
        const idUser = req.params.id;
        await userRepository.findById(idUser)
        .then((user) => {
            res.send("Se encontro el usuario: " + JSON.stringify(user, null, 4));
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
    }

    async findAll(req, res) {
        await userRepository.findAll()
        .then((users) => {
            res.send("Usuarios encontrados: " + JSON.stringify(users, null, 4));
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });

    }

    async delete(req, res){
        const idUser = req.params.id;

        await userRepository.delete(idUser)
        .then(() => {
            res.send("Se elimino el usuario.");
        })
        .catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
    }

    async verify (req, res) {
        if(!Object.keys (req.body).length) {
            res.status(400).send({
                message: 'Se necesitan los datos completos del usuario'
            });
            return;
        }

        const user = {
            username: req.body.username,
            password: req.body.password,
        };

        await userRepository.verify(user.username,user.password)
        .then(() => {
            const token = middlewareJWT.createJWT(user);
            res.send('Token: ' + token);
        }).catch(() => {
            res.status(500).send({
                message: 'No se pudo conectar con la base de datos.'
            });
        });
    }


}