const TodoList = ({ task, onDelete }) => {
    return (
      <li className="task-item">
        {task}
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </li>
    );
  };

  export default TodoList;