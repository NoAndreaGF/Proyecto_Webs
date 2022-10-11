import { db } from "./models/models.js";
import { CustomerController } from "./controllers/customer.controller.js";

const controller = new CustomerController();

const run = async() => {
    const cuscre1 = {
        name: "Pedro",
        lastName: "Gala",
        phone: "6114548595",
        address: "Calles Claras 789",
    };

    const cuscre2 = {
        name: "María",
        lastName: "Bela",
        phone: "6558559598",
        address: "Blvr. Azul 7892",
    };

    const cus1 = await controller.createCustomer(cuscre1);

    const cus1Data = await controller.findByIdCustomer("1");
    console.log(
        "Cliente 1: " + cus1,
        JSON.stringify(cus1Data, null, 2)
    );

    let cus2 = await controller.createCustomer(cuscre2);

    
    let customersAll = await controller.findAllCustomers();
    console.log("Todos los clientes", JSON.stringify(customersAll, null, 2));

    const const2Data = {
        name: "María",
        lastName: "Belanova",
        phone: "6558559598",
        address: "Casas Negras #4589",
    };
    await controller.updateCustomer("2", const2Data);

    const cus2Data = await controller.findByIdCustomer("2");
    console.log(
        "Cliente 2 actualizado: " + cus2Data,
        JSON.stringify(cus2Data, null, 2)
    );

    await controller.delete("1");
    customersAll = await controller.findAllCustomers();
    console.log("Todos los clientes", JSON.stringify(customersAll, null, 2));

};

db.sequelize.sync({force:true}).then(()=> {
    console.log("Drop y re-sync db.");
    run();
});