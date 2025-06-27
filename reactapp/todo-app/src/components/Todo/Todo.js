import React from "react";

/**
 *
 * @param {Object} param0
 * @param {Object} param0.todo
 * @param {number} param0.index
 * @param {Function} param0.completeTodo
 * @param {Function} param0.removeTodo
 * @returns {JSX.Element}
 */
function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className={`card mb-2 ${todo.isCompleted ? 'border-success' : 'border-secondary'}`}>
      <div className="card-body py-2">
        <div className="d-flex justify-content-between align-items-center">
          <span 
            className={`flex-grow-1 ${todo.isCompleted ? 'text-decoration-line-through text-muted' : ''}`}
            style={{ cursor: 'pointer' }}
            onClick={() => completeTodo(index)}
          >
            {todo.isCompleted && <i className="fas fa-check-circle text-success me-2"></i>}
            {!todo.isCompleted && <i className="far fa-circle text-secondary me-2"></i>}
            {todo.text}
          </span>
          <div className="btn-group btn-group-sm ms-2">
            <button 
              className={`btn ${todo.isCompleted ? 'btn-outline-warning' : 'btn-outline-success'}`}
              onClick={() => completeTodo(index)}
              title={todo.isCompleted ? 'Mark as incomplete' : 'Mark as complete'}
            >
              {todo.isCompleted ? (
                <i className="fas fa-undo"></i>
              ) : (
                <i className="fas fa-check"></i>
              )}
            </button>
            <button 
              className="btn btn-outline-danger"
              onClick={() => removeTodo(index)}
              title="Delete todo"
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;