import { ProductRepository } from '../data/repositories/product.repository.js';

const productRepository = new ProductRepository();

export class ProductController {
    async createProduct(product) {
        await productRepository.create(product);
    }

    async updateProduct(idProduct, productData) {
        let productUpdate = await productRepository.findById(idProduct);
        if(productUpdate === undefined){
            throw new Error("El producto no se encuentra definido y no se puede actualizar");
        }
        else if(productUpdate === null){
            throw new Error("El producto es nulo y no se puede actualizar");
        }

        await productRepository.update(idProduct, productData);
    }

    async findByIdProduct(idProduct) {
        let result = await productRepository.findById(idProduct);

        if (result === undefined) {
            throw new Error("El producto no existe");
        }
        return result;
    }

    async findAllProducts() {
        let result = await productRepository.findAll();

        if (result === undefined) {
            throw new Error("No hay productos registrados");
        }
        return result;
    }

    async delete(idProduct){
        await productRepository.delete(idProduct);
    }
}