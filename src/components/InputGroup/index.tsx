import { useState, FormEvent } from "react";

import { useTodo } from "../../hooks/useTodo";

export function InputGroup() {
  const { onCreateTask } = useTodo();

  const [value, setValue] = useState("");

  const handleCreateTask = (event: FormEvent) => {
    event.preventDefault();

    if (!value) {
      return;
    }
    onCreateTask(value);

    setValue("");
  };

  return (
    <>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleCreateTask}>add</button>
      </form>
    </>
  );
}
