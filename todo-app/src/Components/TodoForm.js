import React, { useState } from 'react';

function TodoForm() {
  const [task, setTask] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform your logic here (e.g., making an API request)
    // Replace the placeholder code below with your actual logic
    console.log('Task name:', task);
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit} className="row g-3">
      <div className="col-auto">
        <label htmlFor="inputText" className="visually-hidden">
          Password
        </label>
        <input
          type="text"
          className="form-control"
          id="inputText"
          placeholder="Enter Task name"
          value={task}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Confirm
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
