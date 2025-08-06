import React from "react";
import '../css/AddForm.css'
const AddForm = () => {
  return (
    <div className="container-form">
      <h1>Task Management</h1>
      <h2>Add New Task</h2>
      <form className="form-group">
        <input type="text" className="text-input" />
        <select>
            <option value="toDo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="comPlete">Complete</option>
        </select>
        <button type="submit" className="submit-btn">Add Task</button>
      </form>
    </div>
  );
};

export default AddForm;
