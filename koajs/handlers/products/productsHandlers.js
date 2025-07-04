import { deleteOne, updateOne, addOne, getMany, getOne } from "../../database/productRepository.js";


/**
 * Thêm 1 product vào CSDL
 * 
 * @param {Object} ctx object context của Koa
 * @returns {JSON} trả về dữ liệu data chứa product
 */
const addProduct = async (ctx) => {
    try {
        const data = ctx.request.body;
        const product = await addOne(data);
        if (!product) {
            ctx.status = 404;
            ctx.body = { success: false, message: "Fail to create a product" };
            return;
        }
        return ctx.body = {
            success: true,
            data: product
        }
    } catch (e) {
        ctx.status = 500;
        ctx.body = {
            success: false,
            error: e.message
        };
    }
}

/**
 * Trả về số lượng sản phẩm theo đầu vào
 * 
 * @param {Object} ctx 
 * @returns 
 */
const getManyProducts = async (ctx) => {
    try {
        const { limit, sort } = ctx.query;
        const products = await getMany({ limit, sort });

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

/**
 * Trả về 1 product theo id
 * 
 * @param {Object} ctx 
 * @returns {Object} 
 */
const getOneProduct = async (ctx) => {
    try {
        const { id } = ctx.params;
        const { fields } = ctx.query;
        const currentProduct = await getOne(id);
        if (!currentProduct) {
            const err = new Error("Product not found");
            err.status = 404;
            throw err;
        }

        if (fields) {
            const selectedFields = fields.split(',').map(field => field.trim());
            const filteredProduct = selectedFields.reduce((result, key) => {
                if (currentProduct.hasOwnProperty(key)) {
                    result[key] = currentProduct[key];
                }
                return result;
            }, {});

            return ctx.body = { success: true, data: filteredProduct };
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

/**
 * Cập nhật thông tin của 1 product vào CSDL
 * 
 * @param {Object} ctx 
 * @returns {Object} Trả về 1 object chứa thuộc tính success và product được cập nhật
 */
const updateProduct = async (ctx) => {
    try {
        const { id } = ctx.params;
        const data = ctx.request.body;
        const updatedProduct = await updateOne(id, data);
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

/**
 * Xoá product theo id rồi cập nhật vào CSDL
 * 
 * @param {*} ctx 
 * @returns 
 */
const deleteProduct = async (ctx) => {
    try {
        const { id } = ctx.params;
        const product = await deleteOne(id);
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

// Chỉ phù hợp với server-side-rendering
const renderProductsPage = async (ctx) => {
    const products = await getMany({});
    await ctx.render('index', { products });
};

export default {
    getManyProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    addProduct,
    renderProductsPage
};
