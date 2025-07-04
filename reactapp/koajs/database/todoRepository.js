import { readData, writeData } from '../services/fileServices.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Object structure:
 * - id
 * - u_id (future)
 * - name
 * - description
 * - isDone
 * - createdAt
 * - updatedAt
 * - sub_tasks
 */
/**
 * Thêm 1 object
 * 
 * @param {Object} data 
 * @returns 
 */
const addOne = async (data) => {
    const objectsArray = await readData();
    const object = {
        id: uuidv4(),
        ...data,
        isDone: false,
        createdAt: new Date(),
    };
    const newList = [...objectsArray, object];
    await writeData(newList);
    return object;
}

/**
 * Trả về danh sách các object
 * 
 * @param {int} limit
 * @param {String} sort 
 * @returns {Array<Object>}
 */
const getMany = async ({ limit = 10, sort = 'desc' } = {}) => {
    const objectsArray = await readData();
    let result;

    if (sort === 'asc') {
        result = objectsArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    if (sort === 'desc') {
        result = objectsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (limit) {
        result = objectsArray.slice(0, limit);
    }

    return result;
}

/**
 * Trả về 1 object
 * 
 * @param {String} id 
 * @returns 
 */
const getOne = async (id) => {
    const objectsArray = await readData();
    const object = objectsArray.find(product => product.id === id);
    if (!object) {
        return null;
    }
    return object;
}


/**
 * Cập nhật 1 object
 * 
 * @param {String} id 
 * @param {Object} data 
 * @returns 
 */
const updateOne = async (id, data) => {
    const objectsArray = await readData();
    const newArray = objectsArray.map(obj =>
        obj.id === id ? { ...obj, ...data } : obj
    );
    await writeData(newArray);
    return newArray.find(obj => obj.id === id);

}

/**
 * Xoá 1 object
 * 
 * @param {String} id 
 * @returns 
 */
const deleteOne = async (id) => {
    const objectsArray = await readData();
    const deletedObject = objectsArray.find(product => product.id === id);
    if (!deletedObject) {
        return null;
    }

    const newArray = objectsArray.filter(object => object.id !== id);
    await writeData(newArray);

    return deletedObject;
}

export { deleteOne, updateOne, addOne, getMany, getOne };