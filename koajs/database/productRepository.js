import { readData, writeData } from '../services/fileServices.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * Thêm 1 object
 * 
 * @param {Object} data 
 * @returns 
 */
const addOne = async (data) => {
    const objectsArray = await readData();
    const object = { id: uuidv4(), ...data, createdAt: new Date() };
    const newList = [object, ...objectsArray];
    await writeData(newList);
    return object;
}

/**
 * Trả về danh sách các object
 * 
 * @param {int} limit
 * @param {String} sort 
 * @returns 
 */
const getMany = async ({ limit = 10, sort = 'asc' } = {}) => {
    const objectsArray = await readData();
    let sortedArray = null;
    if (sort === 'asc') {
        sortedArray = objectsArray.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }
    if (sort === 'desc') {
        sortedArray = objectsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }

    if (limit) {
        return objectsArray.slice(0, limit);
    }

    return sortedArray;
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
    const updatedObjectIndex = objectsArray.findIndex(product => product.id === id);
    if (updatedObjectIndex === -1) {
        return null;
    }

    objectsArray[updatedObjectIndex] = { ...objectsArray[updatedObjectIndex], ...data };
    await writeData(objectsArray);
    return objectsArray[updatedObjectIndex];
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
    if (!deletedObject[0]) {
        return null;
    }

    const newArray = objectsArray.filter(object => object.id !== id);
    await writeData(newArray);

    return deletedObject[0];
}

export { deleteOne, updateOne, addOne, getMany, getOne };