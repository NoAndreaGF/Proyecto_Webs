import { db } from '../../models/models.js';
import { Op } from 'sequelize';

const Out = db.out;

export class OutRepository {

    async create(outObject) {
        return await Out.create(outObject);
    };

    async update(idOut, outData) {
        await Out.update(outData, {
            where: {
                idOut
            }
        });
    };

    async findById(idOut) {
        return await Out.findByPk(idOut, {
            include:["product"]
        });
    };

    findAll = async () => {
        return await Out.findAll({
            attributes: ["idOut", "quantity", "date", "createdAt", "updatedAt"],
            include:["product"],
        });
    };

    async delete(idOut) {
        await Out.destroy({ 
            where: {idOut} 
        });
    }

    async findBySearch(search) {
        return await Out.findAll({
            attributes: ["idOut", "quantity", "date", "createdAt", "updatedAt"],
            include: ["product"],
            where: {
                [Op.or]: {
                    idOut: {
                        [Op.eq]: search
                    },
                    date: {
                        [Op.substring]: search
                    },
                }
            }
        });
    }

}