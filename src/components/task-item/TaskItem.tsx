import { useState } from "react";
import type { ITask } from "../../types/todo.types"

interface Props {
  task: ITask;
}

export function TaskItem({ task }: Props) {
  const [isDone, setIsDone] = useState(task.done)

  return (
    <li className="flex gap-7 py-5 border-b-1 border-gray-300 last:border-none">
      <input type="checkbox" checked={isDone} onChange={() => setIsDone(!isDone)} className="cursor-pointer ml-7" />
      <span className={isDone ? "line-through text-gray-400" : ""}>{task.title}</span>
    </li>
  );
}
