import { db } from '../../models/models.js';
import { Op } from 'sequelize';

const In = db.in;

export class InRepository {

    async create(inObject) {
        return await In.create(inObject);
    };

    async update(idIn, inData) {
        await In.update(inData, {
            where: {
                idIn
            }
        });
    };

    async findById(idIn) {
        return await In.findByPk(idIn, {
            include: ["product"]
        });
    };

    async findAll() {
        return await In.findAll({
            attributes: ["idIn", "quantity", "date", "createdAt", "updatedAt"],
            include: ["product"],
        });
    };

    async delete(idIn) {
        await In.destroy({
            where: { idIn }
        });
    };

    async findBySearch(search) {
        return await In.findAll({
            attributes: ["idIn", "quantity", "date", "createdAt", "updatedAt"],
            include: ["product"],
            where: {
                [Op.or]: {
                    idIn: {
                        [Op.eq]: search
                    },
                    date: {
                        [Op.startsWith]: search
                    }
                }
            }
        });
    }

}