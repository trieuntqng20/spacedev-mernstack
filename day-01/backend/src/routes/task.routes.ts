import { taskControllers } from "@src/controllers";
import { Request, Response, Router } from "express";

const taskRoutes = Router();
const namespace = "/tasks";

taskRoutes
    .get(namespace, taskControllers.getAll)
    .get(`${namespace}/:id`, taskControllers.getById)
    .post(namespace, taskControllers.create)
    .put(`${namespace}/:id`, taskControllers.update)
    .delete(`${namespace}/:id`, taskControllers.delete);

export default taskRoutes;
