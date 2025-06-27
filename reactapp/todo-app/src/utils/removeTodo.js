const removeTodo = async ({index, setTodos}) => {
    setTodos((previousTodos) => previousTodos.filter((_, i) => i !== index));
};

export default removeTodo
