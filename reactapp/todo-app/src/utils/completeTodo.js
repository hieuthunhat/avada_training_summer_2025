const completeToDo = ({index, setTodos}) => {
    setTodos((previousTodos) => previousTodos.map((todo, i) => i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo));
};

export default completeToDo