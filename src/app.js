import { db } from "./models/models.js";
import { CustomerController } from "./controllers/customer.controller.js";
import { UserController } from "./controllers/user.controller.js";

const custController = new CustomerController();
const userController = new UserController();

const run = async() => {
    await userController.verifyUser('zxs','12345');
}

db.sequelize.sync({force:false}).then(()=> {
    run();
});