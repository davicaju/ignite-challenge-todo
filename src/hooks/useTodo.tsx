import {
  ReactNode,
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";

type Task = {
  id: number;
  title: string;
  isCompleted: boolean;
};

interface IUseTodo {
  tasks: Task[];
  completedTaskNumber: number;
  onCreateTask: (value: string) => void;
  onDeleteTask: (id: number) => void;
  onCompleteTask: (id: number) => void;
}

const useTodoContext = createContext<IUseTodo>({} as IUseTodo);

export const UseTodoProvider = ({ children }: { children: ReactNode }) => {
  const mockedTasks = [
    {
      id: 1,
      title: "Do something",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Do something",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Do something",
      isCompleted: false,
    },
  ];

  const [tasks, setTasks] = useState<Task[]>([]);
  const [completedTaskNumber, setCompletedTaskNumber] = useState(0);

  const loadTasks = () => {
    const storageTasks = localStorage.getItem("tasks");

    if (storageTasks) {
      const tasks = JSON.parse(storageTasks);

      setTasks(tasks);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const onCreateTask = useCallback(
    (value: string) => {
      const task = {
        id: tasks.length + 1,
        title: value,
        isCompleted: false,
      };

      const updatedTasks = [...tasks, task];

      setTasks(updatedTasks);

      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    },
    [tasks]
  );

  const onDeleteTask = useCallback(
    (id: number) => {
      const noDeletedTask = tasks.filter((task) => task.id !== id);

      setTasks(noDeletedTask);

      localStorage.setItem("tasks", JSON.stringify(noDeletedTask));
    },
    [tasks]
  );

  const onCompleteTask = useCallback(
    (id: number) => {
      const completeTasks = tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              isCompleted: !task.isCompleted,
            }
          : task
      );

      setTasks(completeTasks);
    },
    [tasks]
  );

  useEffect(() => {
    const completedTask = tasks.filter((task) => task.isCompleted === true);

    setCompletedTaskNumber(completedTask.length);
  }, [tasks]);

  return (
    <useTodoContext.Provider
      value={{
        tasks,
        onCreateTask,
        onDeleteTask,
        onCompleteTask,
        completedTaskNumber,
      }}
    >
      {children}
    </useTodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(useTodoContext);
};
