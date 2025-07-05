import { Button, Form, FormLayout, Modal, TextField } from "@shopify/polaris"
import { useCallback, useState } from "react"

const ToDoForm = ({ action }) => {
    const [active, setActive] = useState(true);
    const handleChange = useCallback(() => setActive(!active), [active]);
    const activator = <Button onClick={handleChange}>Open</Button>;
    const [todo, setTodo] = useState({
        todo_name: '',
        description: '',
        sub_tasks: [],
        isDone: false,
        isHidden: false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        action(todo);
        setTodo({
            todo_name: '',
            description: '',
            sub_tasks: '',
            isDone: false,
            isHidden: false,
        });
    };

    return (
        <Modal
            activator={activator}
            open={!active}
            onClose={handleChange}
            title="Create todo"
            primaryAction={{
                content: 'Add',
                onAction: handleSubmit,
            }}
            secondaryActions={[
                {
                    content: 'Cancel',
                    onAction: handleChange,
                },
            ]}
        >
            <Modal.Section>
                <Form onSubmit={handleSubmit}>
                    <FormLayout>
                        <TextField
                            value={todo.todo_name}
                            label="Name"
                            onChange={(todo_name) => setTodo({ ...todo, todo_name })}
                        />
                        <TextField
                            label="Description"
                            value={todo.description}
                            onChange={(description) => setTodo({ ...todo, description })}
                        ></TextField>
                    </FormLayout>
                </Form>
            </Modal.Section>
        </Modal>
    )
}

export default ToDoForm;