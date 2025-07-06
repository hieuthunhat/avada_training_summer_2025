import { getFirestore, collection, query, where, getDocs, getDoc, doc, updateDoc, addDoc, deleteDoc } from "firebase/firestore";
import { app } from "../services/firebaseServices.js";

const db = getFirestore(app);

/**
 * Object structure:
 * - id (doc ref in todos collection)
 * - u_id (future)
 * - todo_name
 * - description
 * - isDone             
 * - isHidden (privacy) 
 * - createdAt          BE
 * - updatedAt          BE
 * - sub_tasks          
 */

export const addOne = async ({ data }) => {
    try {
        const todoRef = await addDoc(collection(db, 'todos'), data);
        const newDoc = await getDoc(todoRef);
        return {
            id: newDoc.id,
            ...newDoc.data()
        }
    } catch (error) {
        console.error("Error adding todo:", error);
        throw error;
    }
}

export const getMany = async () => {
    try {
        const q = query(collection(db, 'todos'));
        const todosSnapshot = await getDocs(q);

        const todos = todosSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));
        return todos;
    } catch (error) {
        console.error('Error fetching todos:', error);
        throw error;
    }
};


export const getOne = async ({ id }) => {
    try {
        const docRef = doc(db, 'todos', id);
        const todoSnap = await getDoc(docRef)

        if (!todoSnap.exists) {
            console.log("No such document!");
            return null;
        }
        return { id: todoSnap.id, ...todoSnap.data() };
    } catch (error) {
        console.error("Error fetching todo:", error);
        throw error;
    }
}

export const updateOne = async ({ id, data }) => {
    try {
        console.log("updateOne called with:", { id, data });
        const docRef = doc(db, 'todos', id);
        await updateDoc(docRef, { ...data, updatedAt: new Date() });
        const updatedDoc = await getDoc(docRef);
        return { id: updatedDoc.id, ...updatedDoc.data() };
    } catch (error) {
        console.error("Error fetching todo:", error);
        throw error;
    }
}

export const deleteOne = async ({ id }) => {
    try {
        const docRef = doc(db, 'todos', id);
        await deleteDoc(docRef)
        return { id };
    } catch (error) {
        console.error("Error fetching todo:", error);
        throw error;
    }
}