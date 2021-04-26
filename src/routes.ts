import { Router } from "express";
import { MessagesController } from "./controlers/MessagesController";
import { SettingsController } from "./controlers/SettingsController";
import { UsersController } from "./controlers/UsersController";

const routes = Router();

/**
 * Tipos de Parâmetros
 * Routes Params => Parametros de rotas
 * http://localhost:3333/settings/1
 * Query Params => Filtros e buscas
 * http://localhost:3333/settings/1?search=algumacoisa
 * 
 * Body Params => {
 * 
 * }
 */

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.get("/settings/:username", settingsController.findByUsername);
routes.put("/settings/:username", settingsController.update);



routes.post("/users", usersController.create);  
 

routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser); 


export { routes };