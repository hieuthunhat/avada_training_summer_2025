import { useCallback, useState } from "react";
import { Box, Card, Button, Modal, Text, InlineStack, } from '@shopify/polaris';
import { useTodos } from "../../hooks/useTodos";
import TodoList from "../TodoList/TodoList";
import ToDoForm from "../TodoForm/TodoForm";


export const TodoContainer = () => {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { addToDo, updateToDo, deleteToDo } = useTodos({
        todos,
        setTodos,
        isLoading,
        setIsLoading
    });
    const handleAddTodo = async (todoData) => {
        const result = await addToDo(todoData);

    };

    return (


        <Card background="bg-surface-secondary">
            <Box as="div" width="800px">
                <InlineStack>
                    <Text>Todoes</Text>
                    <ToDoForm action={handleAddTodo}></ToDoForm>
                </InlineStack>

                <TodoList
                    todos={todos}
                    isLoading={isLoading}
                    updateToDo={updateToDo}
                    deleteToDo={deleteToDo}
                />

            </Box>
        </Card>
    )
}