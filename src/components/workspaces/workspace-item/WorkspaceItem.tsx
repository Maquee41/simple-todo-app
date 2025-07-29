import type { IWorkspace } from "../../../types/todo.types";

interface Props {
  workspace: IWorkspace;
}

export function WorkspaceItem({ workspace }: Props) {
  return (
    <li className="flex justify-between items-center gap-5 mb-2 last:mb-0">
      <span>{workspace.name}</span>
      <div className="flex gap-2">
        <button className="bg-[#545B62] p-1 rounded-md">
          <img src="/edit.svg" alt="Edit" width={25} />
        </button>
        <button className="bg-[#FC5185] p-1 rounded-md">
          <img src="/delete.svg" alt="Delete" width={25} />
        </button>
      </div>
    </li>
  );
}
