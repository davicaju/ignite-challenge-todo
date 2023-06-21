import { useTodo } from "../../hooks/useTodo";

export function TaskList() {
  const { tasks, onDeleteTask, onCompleteTask, completedTaskNumber } =
    useTodo();

  return (
    <>
      <div>
        <p>Tarefas criadas {tasks.length}</p>
        <p>
          Concluídas
          {tasks.length === 0 ? (
            tasks.length
          ) : (
            <p>
              {completedTaskNumber}de{tasks.length}
            </p>
          )}
        </p>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <button onClick={() => onCompleteTask(task.id)}>complete</button>
            <p>{task.title}</p>
            <button onClick={() => onDeleteTask(task.id)}>remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}
