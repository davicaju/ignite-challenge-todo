import { useState, FormEvent } from "react";

import { useTodo } from "../../hooks/useTodo";

import "../../styles/input-group.scss";

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
    <div className="input-group">
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          placeholder="Add a new activity"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleCreateTask}>add</button>
      </form>
    </div>
  );
}
