import { useTodo } from "../../hooks/useTodo";

import trashImg from "/assets/trash.svg";

import { HiOutlineTrash } from "react-icons/hi";

import "../../styles/task-list.scss";

export function TaskList() {
  const { tasks, onDeleteTask, onCompleteTask, completedTaskNumber } =
    useTodo();

  return (
    <div className="task-container">
      <div className="tasks-information">
        <div className="left-content">
          <p>Created tasks</p>

          <span>{tasks.length}</span>
        </div>
        <div className="right-content">
          <p>Done</p>
          {tasks.length === 0 ? (
            <span className="first-span">{tasks.length}</span>
          ) : (
            <span className="second-span">
              {completedTaskNumber} <p>de</p> {tasks.length}
            </span>
          )}
        </div>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="left-content">
              <input
                type="checkbox"
                name=""
                id=""
                checked={task.isCompleted}
                onChange={() => onCompleteTask(task.id)}
              />
              <p
                style={
                  task.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {task.title}
              </p>
            </div>
            <a onClick={() => onDeleteTask(task.id)}>
              <HiOutlineTrash stroke="#808080" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
