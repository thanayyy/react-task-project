import React from "react";
import "../css/AddForm.css";
const AddForm = ({ title, setTitle, status, setStatus,saveTask,editId}) => {
  return (
    <div className="container-form">
      <h1>Task Management</h1>
      <h2>{editId ? "Update Task" : "Add New Task"}</h2>
      <form className="form-group" onSubmit={saveTask}>
        <input
          type="text"
          className="text-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={status} onChange={(e)=> setStatus(e.target.value)}>
          <option>To Do</option>
          <option>In Progress</option>
          <option>Complete</option>
        </select>
        <button type="submit" className="submit-btn" >
          {editId ? "Update Task " : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default AddForm;
