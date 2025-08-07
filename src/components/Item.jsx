import "../css/Item.css";
const Item = ({ data, deleteTask, editTask }) => {
  return (
    <>
      <div className="container-item">
        <div>
          <h1 className="title">{data.title}</h1>
          <p
            className={`status ${
              data.status === "To Do"
                ? "todo"
                : data.status === "In Progress"
                ? "inprogress"
                : data.status === "Complete"
                ? "complete"
                : ""
            }`}
          >
            Status: {data.status}
          </p>
        </div>

        <div className="btn-container">
          <button className="btn-edit" onClick={() => editTask(data.id)}>
            Edit
          </button>
          <button className="btn-del" onClick={() => deleteTask(data.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
