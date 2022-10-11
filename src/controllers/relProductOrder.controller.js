import { RelProductOrderRepository } from '../data/repositories/relProductOrder.repository.js';

const relProductOrderRepository = new RelProductOrderRepository();

export class RelProductOrderRepositoryController {
    async createRel(rel) {
        await relProductOrderRepository.create(rel);
    }

    async updateRel(idRel, relData) {
        let relUpdate = await relProductOrderRepository.findById(idRel);
        if(relUpdate === undefined){
            throw new Error("La relación no se encuentra definida y no se puede actualizar");
        }
        else if(relUpdate === null){
            throw new Error("La relación es nula y no se puede actualizar");
        }

        await relProductOrderRepository.update(idRel, relData);
    }

    async findByIdRel(idRel) {
        let result = await relProductOrderRepository.findById(idRel);

        if (result === undefined) {
            throw new Error("La relación no existe");
        }
        return result;
    }

    async findAllRels() {
        let result = await relProductOrderRepository.findAll();

        if (result === undefined) {
            throw new Error("No hay relación registradas");
        }
        return result;
    }

    async delete(idRel){
        await relProductOrderRepository.delete(idRel);
    }
}