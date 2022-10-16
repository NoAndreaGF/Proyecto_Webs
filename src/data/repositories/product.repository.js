import { db } from '../../models/models.js';

const Product = db.product;

export class ProductRepository {

    async create(product) {
        return await Product.create(product);
    };

    async update(idProduct, productData) {
        let productUpdate = await Product.findByPk(idProduct);
        // Validation
        if(productUpdate === undefined){
            throw new Error("El producto no se encuentra definido y no se puede actualizar");
        }
        else if(productUpdate === null){
            throw new Error("El producto es nulo y no se puede actualizar");
        }

        await Product.update(productData, {
            where: {
                idProduct
            }
        });
    };

    async findById(idProduct) {
        let result =  await Product.findByPk(idProduct, {
            include:["ins", "outs", "orders"]
        });

        // Validation
        if (result === null) {
            throw new Error("El producto no existe");
        }
        return result;
    };

    findAll = async () => {
        let result = await Product.findAll({
            attributes: ["idProduct","name", "brand", "description", "price", "stock", "createdAt", "updatedAt"],
            include:["ins", "outs", "orders"],
        });

        // Validation
        if (result === null) {
            throw new Error("No hay productos registrados");
        }
        return result;
    };

    async delete(idProduct) {
        await Product.destroy({ 
            where: {idProduct} 
        });
    };

}