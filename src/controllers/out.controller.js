import { OutRepository } from '../data/repositories/out.repository.js';

const outRepository = new OutRepository();

export class OutController {
    async createOut(out) {
        await outRepository.create(out);
    }

    async updateOut(idOut, outData) {
        let outUpdate = await outRepository.findById(idOut);
        if(outUpdate === undefined){
            throw new Error("La salida no se encuentra definida y no se puede actualizar");
        }
        else if(outUpdate === null){
            throw new Error("La salida es nula y no se puede actualizar");
        }

        await outRepository.update(idOut, outData);
    }

    async findByIdOut(idOut) {
        let result = await outRepository.findById(idOut);

        if (result === undefined) {
            throw new Error("La salida no existe");
        }
        return result;
    }

    async findAllOuts() {
        let result = await outRepository.findAll();

        if (result === undefined) {
            throw new Error("No hay salidas registrados");
        }
        return result;
    }

    async delete(idOut){
        await outRepository.delete(idOut);
    }
}