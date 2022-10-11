import { db } from '../../models/models.js';

const RelProductOrder = db.relProductOrder;

export class RelProductOrderRepository {

    create = async (relProductOrder) => {
        return await RelProductOrder.create(
            relProductOrder
        ).then((relProductOrder) => {
            console.log("Se creo la relacioón producto-orden: " + JSON.stringify(relProductOrder, null, 4));
            return relProductOrder;
        }).catch((err) => {
            console.error("Error al crear la relacioón producto-orden: ", err)
        });
    };

    update = async (idRelProductOrder, relProductOrderData) => {
        return await RelProductOrder.update(relProductOrderData, {
            where: {
                idRelProductOrder
            }
        }).then((relProductOrder) => {
            console.log("Se actualizó la relacioón producto-orden: " + JSON.stringify(relProductOrder, null, 4));
            return relProductOrder;
        }).catch((err) => {
            console.error("Error al actualizar la relacioón producto-orden: ", err)
        });
    };

    findById = async (idRelProductOrder) => {
        return await RelProductOrder.findByPk(idRelProductOrder, {
            include:["customer"]
        }).then((relProductOrder) => {
           return relProductOrder;
        }).catch((err) => {
           console.error("Error al buscar orden: ", err);
        });
    };

    findAll = async () => {
        return await RelProductOrder.findAll({
            attributes: ["idRel", "quantity", "price", "createdAt", "updatedAt"],
            include:["product", "order"],
        }).then((relProductOrders) => {
           return relProductOrders;
        });
    };

    delete = async (idRelProductOrder) => {
        await RelProductOrder.destroy({ 
            where: {idRelProductOrder} 
        }).then((idRelProductOrder) => {
            console.log("Se eliminó la relacioón producto-orden: " + JSON.stringify(idRelProductOrder, null, 4));
        }).catch((err) => {
            console.error("Error al eliminar la relacioón producto-orden: ", err)
        });
    };

}