import yup from 'yup';

/**
 * Middleware xử lý input được truyền khi gọi API
 * 
 * @param {*} ctx 
 * @param {*} next 
 */
export const productInputMiddleware = async (ctx, next) => {
    try {
        const productData = ctx.request.body;
        const schema = yup.object().shape({
            name: yup.string().required('Product name is required'),
            price: yup.number().positive('Price must be positive').required('Price is required'),
            product: yup.string().required('Product category is required'),
            description: yup.string().optional(),
            color: yup.string().optional(),
            image: yup.string().url('Image must be a valid URL').optional()
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