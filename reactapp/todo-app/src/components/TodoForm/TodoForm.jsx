import { Button, Form, FormLayout, TextField } from "@shopify/polaris"
import { useState } from "react"

const ToDoForm = ({ action }) => {
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
                <Button submit>Submit</Button>
            </FormLayout>
        </Form>
    )
}

export default ToDoForm;