import { TASKS } from "./tasks.data";
import { TaskItem } from "../task-item/TaskItem";

export function TaskList() {
  return (
    <div className="border-3 border-[#C6C6C6] rounded-md">
      {TASKS.map(task => (
        <TaskItem key={task.title} task={task}  />
      ))}
    </div>
  );
}
