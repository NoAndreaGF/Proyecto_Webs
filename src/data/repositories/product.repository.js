import { db } from '../../models/models.js';
import { Op } from 'sequelize';

const Product = db.product;

export class ProductRepository {

    async create(product) {
        return await Product.create(product);
    };

    async update(idProduct, productData) {
        await Product.update(productData, {
            where: {
                idProduct
            }
        });
    };

    async findById(idProduct) {
        return await Product.findByPk(idProduct, {
            include: ["ins", "outs", "orders"]
        });
    };

    findAll = async () => {
        return await Product.findAll({
            attributes: ["idProduct", "name", "brand", "description", "price", "stock", "createdAt", "updatedAt"],
            include: ["ins", "outs", "orders"],
        });
    };

    async delete(idProduct) {
        await Product.destroy({
            where: { idProduct }
        });
    };

    async findBySearch(search) {
        return await Product.findAll({
            attributes: ["idProduct", "name", "brand", "description", "price", "stock", "createdAt", "updatedAt"],
            include: ["ins", "outs", "orders"],
            where: {
                [Op.or]: {
                    name: {
                        [Op.substring]: search
                    },
                    idProduct: {
                        [Op.eq]: search
                    },
                    brand: {
                        [Op.substring]: search
                    }
                }
            }
        });
    }

}