import { useState } from "react";
import { Card, } from '@shopify/polaris';
import { useTodos } from "../../hooks/useTodos";
import TodoList from "../TodoList/TodoList";
import TodoNavbar from "../TodoNavbar/TodoNavbar";


export const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { addToDo, updateToDo, deleteToDo, completeManyTodo, deleteManyTodo } = useTodos({
        todos,
        setTodos,
        isLoading,
        setIsLoading,
    });
    const handleAddTodo = async (todoData) => {
        await addToDo(todoData);
    };

    return (
        <Card background="bg-surface-secondary">
            <TodoNavbar action={handleAddTodo}></TodoNavbar>

            <TodoList
                todos={todos}
                isLoading={isLoading}
                updateToDo={updateToDo}
                deleteToDo={deleteToDo}
                setIsLoading={setIsLoading}
                completeManyTodo={completeManyTodo}
                deleteManyTodo={deleteManyTodo}
            />
        </Card>
    )
}