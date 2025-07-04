import { useState, useEffect } from "react";
import { fetchAddToDo, fetchDeleteOneToDo, fetchToDoList, fetchUpdateOneToDo } from "../services/fetchAPI";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const getDataList = async () => {
    const todoList = await fetchToDoList();
    setTodos(todoList.data);
  };

  const addToDo = async ({ todo_name }) => {
    if (!todo_name) {
      alert("Enter sth before submiting");
      return;
    }
    const newToDo = await fetchAddToDo({ todo_name });
    setTodos(prev => [newToDo.data, ...prev]);
    return newToDo;
  };

  const deleteToDo = async ({ id }) => {
    try {
      const res = await fetchDeleteOneToDo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error when updating");
    } finally {

    }
  };

  const updateToDo = async ({ id }) => {
    const updatedToDo = todos.find(todo => todo.id === id);
    if (!updatedToDo) {
      return null;
    }
    const statusUpdated = !updatedToDo.isDone;
    const newUpdatedToDo = await fetchUpdateOneToDo(id, statusUpdated);
    setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isDone: statusUpdated } : todo));
    return newUpdatedToDo.data;
  };

  useEffect(() => {
    getDataList();
  }, []);

  return {
    todos,
    addToDo,
    deleteToDo,
    updateToDo
  };
};
