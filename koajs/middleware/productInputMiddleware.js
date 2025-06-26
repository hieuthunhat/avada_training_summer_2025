import yup from 'yup';

export const productInputMiddleware = async (ctx, next) => {
    try {
        const productData = ctx.request.body;
        const schema = yup.object().shape({
            id: yup.number().positive().integer().required(),
            name: yup.string().required(),
            price: yup.number().required(),
            description: yup.string(),
            product: yup.string().required(),
            color: yup.string(),
            createdAt: yup.string().url().required(),
            image: yup.string()
        })

        await schema.validate(productData);
        next();
    } catch (error) {
        ctx.status = 400;
        ctx.body = {
            success: false,
            errors: error.errors,
            errorName: error.name
        }
    }
}