import { useState } from "react";
import { Box, Card, Button, Page, Layout, FormLayout } from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import AddTodoModal from "../AddTodoModal/AddTodoModal";
import { useTodos } from "../../hooks/useTodos";
import { PopUpProvider } from "../../context/PopUpContext";
import TodoList from "../TodoList/TodoList";


export const TodoApp = () => {
    const [isAddPopupOpen, setIsAddPopupOpen] = useState(false);
    const { addToDo } = useTodos();

    const handleAddTodo = async (todoData) => {
        const result = await addToDo(todoData);
        if (result) {
            setIsAddPopupOpen(false);
        }
        return result;

    };

    return (
        <Page>
            <Layout>
                <FormLayout>
                    <PopUpProvider>
                        <Card background="bg-surface-secondary">
                            <Box as="div" width="800px">
                                <Box>
                                    <Button onClick={() => setIsAddPopupOpen(true)} tone="success">
                                        Create
                                    </Button>
                                </Box>      
                                
                                <TodoList></TodoList>

                                <AddTodoModal
                                    isOpen={isAddPopupOpen}
                                    onClose={() => setIsAddPopupOpen(false)}
                                    onAddTodo={handleAddTodo}
                                />
                            </Box>
                        </Card>
                    </PopUpProvider>
                </FormLayout>
            </Layout>
        </Page>
    )
}