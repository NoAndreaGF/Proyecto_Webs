import { CustomerRepository } from '../data/repositories/customer.repository.js';

const customerRepository = new CustomerRepository();

export class CustomerController {
    async createCustomer(customer) {
        await customerRepository.create(customer);
    }

    async updateCustomer(idCustomer, customerData) {
        let customerUpdate = await customerRepository.findById(idCustomer);
        if(customerUpdate === undefined){
            throw new Error("El cliente no se encuentra definido y no se puede actualizar");
        }
        else if(customerUpdate === null){
            throw new Error("El cliente es nulo y no se puede actualizar");
        }

        await customerRepository.update(idCustomer, customerData);
    }

    async findByIdCustomer(idCustomer) {
        let result = await customerRepository.findById(idCustomer);

        if (result === undefined) {
            throw new Error("El cliente no existe");
        }
        return result;
    }

    async findAllCustomers() {
        let result = await customerRepository.findAll();

        if (result === undefined) {
            throw new Error("No hay clientes registrados");
        }
        return result;
    }

    async delete(idCustomer){
        await customerRepository.delete(idCustomer);
    }
}