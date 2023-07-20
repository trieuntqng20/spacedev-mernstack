import { Request, Response } from "express";

const taskList: any = [];

const taskControllers = {
    getAll: (req: Request, res: Response) => {
        return res.status(200).json(taskList);
    },
    getById: (req: Request, res: Response) => {
        const task = taskList.find((item: any) => item.id === +req.params.id);

        if (!task)
            return res.status(404).json({
                message: "Task not found",
            });
        return res.status(200).json(task);
    },
    create: (req: Request, res: Response) => {
        const { title, description } = req.body;
        const task = {
            id: new Date().getTime(),
            title,
            description,
        };
        taskList.push(task);
        return res.status(200).json(task);
    },
    update: (req: Request, res: Response) => {
        const { title, description } = req.body;
        const task = taskList.find((item: any) => item.id === +req.params.id);
        if (!task)
            return res.status(404).json({
                message: "Task not found",
            });

        task.title = title;
        task.description = description;
        return res.status(201).json({
            message: "Update task successfully",
        });
    },
    delete: (req: Request, res: Response) => {
        const taskIndex = taskList.findIndex((item: any) => item.id === +req.params.id);
        if (taskIndex !== -1) {
            taskList.splice(taskIndex, 1);
            return res.status(200).json({
                message: "Delete task successfully",
            });
        }

        return res.status(404).json({
            message: "Delete task successfully",
        });
    },
};

export default taskControllers;
