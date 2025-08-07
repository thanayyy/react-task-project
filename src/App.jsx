import { useState, useEffect } from "react";
import "./css/App.css";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import AddForm from "./components/AddForm";
import Item from "./components/Item";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("To Do");
  const [editId, setEditId] = useState(null);
  const [theme,setTheme] = useState('light')
//localstorage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const deleteTask = (id) => {
    const result = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(result);
  };
// add update
  const saveTask = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Please Enter Your Task!!");
    } else if (editId) {
      const updateTask = tasks.map((item) => {
        if (item.id === editId) {
          return { ...item, title: title, status: status };
        }
        return item;
      });
      setTasks(updateTask);
      setEditId(null);
      setTitle("");
      setStatus("To Do");
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

  const editTask = (id) => {
    setEditId(id);
    const editTask = tasks.find((item) => item.id === id);
    setTitle(editTask.title);
    setStatus(editTask.status);
  };
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className="container">
        <AddForm
          title={title}
          setTitle={setTitle}
          status={status}
          setStatus={setStatus}
          saveTask={saveTask}
          editId={editId}
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
