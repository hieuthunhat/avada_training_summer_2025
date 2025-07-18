import { Button, FormLayout, Modal, TextField } from "@shopify/polaris"
import { useCallback, useState } from "react"

/**
 * Notes:
 * Thiếu validation ở FE
 *  
 */

const ToDoForm = ({ action }) => {
    const [active, setActive] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleChange = useCallback(() => setActive(!active), [active]);

    const [todo, setTodo] = useState({
        todo_name: '',
        description: '',
        isDone: false,
    });

    const handleOpen = () => {
        setTodo({
            todo_name: '',
            description: '',
            isDone: false,
        });
        setActive(true);
    };

    const submitTodo = async () => {
        if (!todo.todo_name.trim()) return;
        setIsSubmitting(true);
        try {
            await action(todo);
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
            setActive(false);
        }
    };

    const activator = <Button variant="primary" onClick={handleOpen}>Create</Button>;


    return (
        <Modal
            activator={activator}
            open={active}
            onClose={handleChange}
            title="Create todo"
            primaryAction={{
                content: 'Add',
                onAction: submitTodo,
            }}
            secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: handleChange,
                },
            ]}
        >
            <Modal.Section>
                <FormLayout>
                    <TextField
                        value={todo.todo_name}
                        label="Title"
                        onChange={(todo_name) => setTodo({ ...todo, todo_name })}
                    />
                    <TextField
                        label="Description"
                        value={todo.description}
                        onChange={(description) => setTodo({ ...todo, description })}
                    />
                </FormLayout>
            </Modal.Section>
        </Modal>
    );
};

export default ToDoForm;