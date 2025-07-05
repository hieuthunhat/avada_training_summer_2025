import { useEffect } from "react";
import { fetchAddToDo, fetchDeleteOneToDo, fetchToDoList, fetchUpdateOneToDo } from "../services/fetchAPI";

export const useTodos = ({ todos, setIsLoading, setTodos }) => {

  const getDataList = async () => {
    setIsLoading(true);
    try {
      const todoList = await fetchToDoList();
      setTodos(todoList.data);
    } finally {
      setIsLoading(false);
    }
  };

  const addToDo = async (todo) => {
    if (!todo) {
      alert("Enter sth before submitting");
      return;
    }
    setIsLoading(true);
    try {
      const newToDo = await fetchAddToDo(todo);
      setTodos(prev => [newToDo.data, ...prev]);
      return newToDo;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteToDo = async ({ id }) => {
    try {
      const res = await fetchDeleteOneToDo(id);
      setTodos(prev => prev.filter(todo => todo.id !== id));
      return res.data;
    } catch (error) {
      console.error(error);
      throw new Error("Error when deleting");
    }
  };

  const updateToDo = async ({ id }) => {
    const updatedToDo = todos.find(todo => todo.id === id);
    if (!updatedToDo) return null;

    const statusUpdated = !updatedToDo.isDone;
    const newUpdatedToDo = await fetchUpdateOneToDo(id, statusUpdated);
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, isDone: statusUpdated } : todo)
    );
    return newUpdatedToDo.data;
  };

  useEffect(() => {
    getDataList();
  }, []);

  return {
    addToDo,
    deleteToDo,
    updateToDo
  };
};
