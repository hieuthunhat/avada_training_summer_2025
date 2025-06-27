import React from "react";

/**
 *
 * @param {*} param0
 * @returns
 */
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value.trim());
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add a new todo..."
          value={value}
          onChange={e => setValue(e.target.value)}
          autoFocus
        />
        <button 
          className="btn btn-primary" 
          type="submit"
          disabled={!value.trim()}
        >
          <i className="fas fa-plus me-1"></i>
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;