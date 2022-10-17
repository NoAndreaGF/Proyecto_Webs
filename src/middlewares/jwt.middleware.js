
import pkg from 'jsonwebtoken';
const { sign } = pkg;
import {llave} from '../configs/config.js'

export class MiddlewareJWT{

    createJWT(user){
            const token = sign(user,llave);
            return token;   
    }

}