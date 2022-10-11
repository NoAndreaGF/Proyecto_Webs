import { InRepository } from '../data/repositories/in.repository.js';

const inRepository = new InRepository();

export class InController {
    async createIn(inObject) {
        await inRepository.create(inObject);
    }

    async updateIn(idIn, inData) {
        let inUpdate = await inRepository.findById(idIn);
        if(inUpdate === undefined){
            throw new Error("La entrada no se encuentra definida y no se puede actualizar");
        }
        else if(inUpdate === null){
            throw new Error("La entrada es nula y no se puede actualizar");
        }

        await inRepository.update(idIn, inData);
    }

    async findByIdIn(idIn) {
        let result = await inRepository.findById(idIn);

        if (result === undefined) {
            throw new Error("La entrada no existe");
        }
        return result;
    }

    async findAllIns() {
        let result = await inRepository.findAll();

        if (result === undefined) {
            throw new Error("No hay entradas registrados");
        }
        return result;
    }

    async delete(idIn){
        await inRepository.delete(idIn);
    }
}