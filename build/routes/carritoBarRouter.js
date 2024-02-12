"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const carritoBarController_1 = require("../controllers/carritoBarController"); //checar el noombre del objeto de platillo controler, debe coincidir
class CarritoBarRouter {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.post('/insertarBebidaBar/', carritoBarController_1.carritoBarController.insertar_bebida_bar);
        this.router.delete('/eliminarBebidaBar/:id', carritoBarController_1.carritoBarController.eliminar_bebida_bar);
        this.router.delete('/eliminarBebidaBarByIdCarrito/:CarritoId', carritoBarController_1.carritoBarController.eliminar_bebida_bar_by_idCarrito);
        this.router.get('/mostrarBebidasBar/', carritoBarController_1.carritoBarController.mostrar_todas_bebidas_bar);
        this.router.get('/buscarBebidaIdBar/:id', carritoBarController_1.carritoBarController.buscar_bebida_id);
        this.router.put('/modificarEstado/:id', carritoBarController_1.carritoBarController.modificar_estado_bar_de_bebida);
        this.router.get('/buscarBebidaIdCarrito/:idCarrito', carritoBarController_1.carritoBarController.buscar_bebida_by_IdCarrito);
    }
}
const carritoBarRouter = new CarritoBarRouter();
exports.default = carritoBarRouter.router;
