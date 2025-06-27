import React, { useState, useEffect } from "react";
import "./App.css";
import Todo from "./components/Todo/Todo";
import TodoForm from "./components/TodoForm/TodoForm";
import completeToDo from "./utils/completeTodo";
import removeTodo from "./utils/removeTodo";
import addTodo from "./utils/addToDo";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  }, []);

  if (loading) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Loading todos...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="alert alert-danger text-center">
              <h4 className="alert-heading">Error!</h4>
              <p>{error}</p>
              <button 
                className="btn btn-outline-danger"
                onClick={() => window.location.reload()}
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h2 className="mb-0">Todo App</h2>
              <small>Manage your daily tasks</small>
            </div>
            <div className="card-body">
              <TodoForm addTodo={addTodo} />
              <hr />
              {todos.length === 0 ? (
                <div className="text-center text-muted py-4">
                  <i className="fas fa-tasks fa-3x mb-3"></i>
                  <p>No todos yet. Add your first task above!</p>
                </div>
              ) : (
                <div className="todo-list">
                  {todos.map((todo, index) => (
                    <Todo
                      key={todo.id || index}
                      index={index}
                      todo={todo}
                      completeTodo={completeToDo}
                      removeTodo={removeTodo}
                    />
                  ))}
                </div>
              )}
            </div>
            <div className="card-footer text-center text-muted">
              <small>Total tasks: {todos.length} | Completed: {todos.filter(todo => todo.isCompleted).length}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;