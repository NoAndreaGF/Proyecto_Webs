import jwt from 'jsonwebtoken';
import { llave } from '../configs/config.js';

export { JWTMiddleware };

var whitelist = ['/users/verifyGET','/usersPOST']

const JWTMiddleware = (req, res, next) => {

    const token = req.headers['x-access-token'];
    if (!token) {
        if(whitelist.includes(req.url + req.method)){
            next();
        }else {
            res.status(401).send('Token requerido!');
        }
    } else {

        jwt.verify(token, llave, (err, decoded) => {
            if (err) {
                res.status(401).send('Autorizacion fallida!');
            }
            next();
        });
    }

};
