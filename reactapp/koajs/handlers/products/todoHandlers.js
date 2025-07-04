import { addOne, deleteOne, getMany, getOne, updateOne } from "../../database/todosRepository.js";
import { v4 as uuidv4 } from 'uuid';

const addToDo = async (ctx) => {
    try {
        const data = ctx.request.body;
        const fullTodo = {
            ...data,
            isDone: false,
            createdAt: new Date(),
            sub_tasks: [],
        }
        
        const toDo = await addOne({data: fullTodo});
        if (!toDo) {
            ctx.status = 404;
            ctx.body = { success: false, message: "Fail to create a TODO" };
            return;
        }
        return ctx.body = {
            success: true,
            data: toDo
        }
    } catch (e) {
        ctx.status = 500;
        ctx.body = {
            success: false,
            error: e.message
        };
    }
}

const getManyTodos = async (ctx) => {
    try {
        // const { limit, sort } = ctx.query;
        const products = await getMany();

        return ctx.body = {
            success: true,
            data: products
        }
    } catch (e) {
        ctx.status = 500;
        ctx.body = {
            success: false,
            error: e.message
        };
    }
}

const getOneToDo = async (ctx) => {
    try {
        const { id } = ctx.params;
        const currentProduct = await getOne({id});
        if (!currentProduct) {
            const err = new Error("Todo not found");
            err.status = 404;
            throw err;
        }

        return ctx.body = { success: true, data: currentProduct };

    } catch (e) {
        ctx.status = 500;
        ctx.body = {
            success: false,
            error: e.message
        };
    }
}

const updateToDo = async (ctx) => {
    try {
        const { id } = ctx.params;
        
        const data = ctx.request.body;
        // do updateone ko tra ve
        const updatedProduct = await updateOne({id, data});
        if (!updatedProduct) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'Product not found' };
            return;
        }
        return ctx.body = { success: true, data: updatedProduct };
    } catch (e) {
        ctx.status = 500;
        ctx.body = { success: false, error: e.message };
    }
}

const deleteToDo= async (ctx) => {
    try {
        const { id } = ctx.params;
        const product = await deleteOne({id: id});
        if (!product) {
            ctx.status = 404;
            ctx.body = { success: false, message: 'Product not found' };
            return;
        }
        return ctx.body = { success: true, data: product };
    } catch (e) {
        ctx.status = 500;
        ctx.body = { success: false, error: e.message };
    }
}

export default {
    getManyTodos,
    getOneToDo,
    updateToDo,
    deleteToDo,
    addToDo
};
