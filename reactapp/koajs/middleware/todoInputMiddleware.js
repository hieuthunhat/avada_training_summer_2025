import * as yup from 'yup';

/**
 * Middleware xử lý input được truyền khi gọi API
 * 
 * @param {*} ctx 
 * @param {*} next 
 */
export const inputMiddleware = async (ctx, next) => {
    try {
        const productData = ctx.request.body;
        const schema = yup.object().shape({
            todo_name: yup.string().required('Name is required'),
            description: yup.string().optional(),
        });

        await schema.validate(productData);
        await next();
    } catch (error) {
        ctx.status = 400;
        ctx.body = {
            success: false,
            message: 'Validation failed',
            errors: error.errors || [error.message],
            errorName: error.name
        }
    }
}