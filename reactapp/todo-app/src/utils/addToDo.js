const addTodo = (text, setTodos, todos) => {
    const newId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const newTodo = {
        id: newId,
        text,
        isCompleted: false,
        userId: 1
    };
    setTodos((previousTodos) => [...previousTodos, newTodo]);
};

export default addTodo