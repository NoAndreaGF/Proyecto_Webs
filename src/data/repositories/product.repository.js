import { db } from '../../models/models.js';

const Product = db.product;

export class ProductRepository {

    create = async (product) => {
        return await Product.create(
            product
        ).then((product) => {
            console.log("Se creo el producto: " + JSON.stringify(product, null, 4));
            return product;
        }).catch((err) => {
            console.error("Error al crear el producto: ", err)
        });
    };

    update = async (idProduct, productData) => {
        return await Product.update(productData, {
            where: {
                idProduct
            }
        }).then((product) => {
            console.log("Se actualizó el producto: " + JSON.stringify(product, null, 4));
            return product;
        }).catch((err) => {
            console.error("Error al actualizar el producto: ", err)
        });
    };

    findById = async (idProduct) => {
        return await Product.findByPk(idProduct, {
            include:["ins", "outs", "orders"]
        }).then((product) => {
           return product;
        }).catch((err) => {
           console.error("Error al buscar orden: ", err);
        });
    };

    findAll = async () => {
        return await Product.findAll({
            attributes: ["idProduct","name", "brand", "description", "price", "stock", "createdAt", "updatedAt"],
            include:["ins", "outs", "orders"],
        }).then((products) => {
           return products;
        });
    };

    delete = async (idProduct) => {
        await Product.destroy({ 
            where: {idProduct} 
        }).then((idProduct) => {
            console.log("Se eliminó el producto: " + JSON.stringify(idProduct, null, 4));
        }).catch((err) => {
            console.error("Error al eliminar el producto: ", err)
        });
    };

}