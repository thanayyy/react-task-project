import { useState } from "react";
import "./css/App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";

function App() {
  const newId = uuidv4();
  const [tasks, setTasks] = useState([]);

  const deleteTask = (id) => {
    const result = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(result);
  };

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("To Do");

  const saveTask = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please Enter Your Task!!");
    } else {
      title.trim();
      const newTask = {
        id: uuidv4(),
        title: title,
        status: status,
      };
      setTasks([...tasks, newTask]);
      setTitle("");
      setStatus("To Do");
    }
  };

  const editTask = (id) => {};
  return (
    <div className="App">
      <Header />
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          status={status}
          setStatus={setStatus}
          saveTask={saveTask}
        />
        <section>
          <h2>Task List</h2>
          {tasks.map((data) => (
            <Item
              key={data.id}
              data={data}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
