import { memo } from "react";
import { WORKSPACES } from "../workspaces.data";

export const WorkspaceSelect = memo(function WorkspaceSelect() {
  return (
    <select className="cursor-pointer">
      {WORKSPACES.map((workspace) => (
        <option
          key={workspace.id}
          value={workspace.id}
          className="text-gray-700"
        >
          {workspace.name}
        </option>
      ))}
    </select>
  );
});
