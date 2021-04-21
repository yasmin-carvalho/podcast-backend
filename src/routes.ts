import { Router } from "express";
import { SettingsControler } from "./controlers/SettingsControler";

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

const settingsControler = new SettingsControler();

routes.post("/settings", settingsControler.create);
    

export { routes };