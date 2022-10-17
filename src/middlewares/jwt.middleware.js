import pkg from 'jsonwebtoken';
const { sign, verify} = pkg;
import { llave } from '../configs/config.js'

export class MiddlewareJWT {

    createJWT(user) {
        const token = sign(user, llave, {
            expiresIn: 1440
        });

        return token;
    }

    verifyJWT (token) {
        verify(token,llave);
        return ("Se verifico el token.");
    }
      
}