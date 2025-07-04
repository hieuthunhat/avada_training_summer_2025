import { Button, Form, FormLayout, TextField } from "@shopify/polaris"
import { useState } from "react"

const ToDoForm = ({ action }) => {
    const [todo_name, setTodoName] = useState('');
    const handleSubmit = (e) => {   
        e.preventDefault();
        console.log(todo_name);
             
        action( {todo_name});
        setTodoName('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormLayout>
                <TextField
                    value={todo_name}
                    label="Name"
                    onChange={name => setTodoName(name)}
                />
                <Button submit>Submit</Button>
            </FormLayout>
        </Form>
    )
}

export default ToDoForm;