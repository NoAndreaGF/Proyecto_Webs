import { db } from "./models/models.js";
import { create, findAll, findById, update, drop } from "./controllers/customer.controller.js";
import { createOrder, findAllOrder, findByIdOrder, updateOrder, dropOrder } from "./controllers/order.controller.js";


const run = async() => {
    const cus1 = await create({
        name: "Pedro",
        lastName: "Gala",
        phone: "6114548595",
        address: "Calles Claras 789",
    });

    const cus1Data = await findById(cus1.idCustomer);
    console.log(
        "Cliente 1: " + cus1.idCustomer,
        JSON.stringify(cus1Data, null, 2)
    );

    let cus2 = await create({
        name: "María",
        lastName: "Bela",
        phone: "6558559598",
        address: "Blvr. Azul 7892",
    });

    let ord1 = await createOrder(cus1.idCustomer, {
        orderDate: Date.parse("2022-10-11"),
        deliveryDate: Date.parse("2022-11-11"),
        status: "Sin entregar cliente 1",
        totalAmount: "1000.0",
    });

    let ord2 = await createOrder(cus2.idCustomer, {
        orderDate: Date.parse("2022-08-10"),
        deliveryDate: Date.parse("2022-08-30"),
        status: "Entregado cliente 2",
        totalAmount: "1000.0"
    });

    let ord3 = await createOrder(cus2.idCustomer, {
        orderDate: Date.parse("2022-08-10"),
        deliveryDate: Date.parse("2022-08-30"),
        status: "Sin entregar cliente 2",
        totalAmount: "1000.0"
    });
    
    let customersAll = await findAll();
    console.log("Todos los clientes", JSON.stringify(customersAll, null, 2));

    let ordAll = await findAllOrder();
    console.log("Todos las ordenes", JSON.stringify(ordAll, null, 2));

    const const2Data = {
        name: "María",
        lastName: "Belanova",
        phone: "6558559598",
        address: "Casas Negras #4589",
    };
    await update(cus2.idCustomer, const2Data);

    const cus2Data = await findById(cus2.idCustomer);
    console.log(
        "Cliente 2 actualizado: " + cus2.idCustomer,
        JSON.stringify(cus2Data, null, 2)
    );

    const ord2Data = {
        orderDate: Date.parse("2022-10-10"),
        deliveryDate: Date.parse("2022-06-30"),
        status: "Entregado cliente 2",
        totalAmount: "541.0"
    }
    await updateOrder(ord2.idOrder, ord2Data);

    const ordData = await findByIdOrder(ord1.idOrder);
    console.log(
        "Orden 2 actualizad2: " + cus2.idCustomer,
        JSON.stringify(ordData, null, 2)
    );

    await dropOrder(ord1.idOrder);
    await drop(cus1.idCustomer);

    customersAll = await findAll();
    console.log("Todos los clientes", JSON.stringify(customersAll, null, 2));

};

db.sequelize.sync({force:true}).then(()=> {
    console.log("Drop y re-sync db.");
    run();
});
