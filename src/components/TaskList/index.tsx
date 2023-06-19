import { useTodo } from "../../hooks/useTodo";

export function TaskList() {
  const { tasks, onDeleteTask, onCompleteTask } = useTodo();
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <button onClick={() => onCompleteTask(task.id)}>complete</button>
          {task.title}{" "}
          <button onClick={() => onDeleteTask(task.id)}>remove</button>
        </li>
      ))}
    </ul>
  );
}
