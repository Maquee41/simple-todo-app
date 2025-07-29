import { WorkspaceItem } from "../workspace-item/WorkspaceItem";
import { WORKSPACES } from "../workspaces.data"

export function WorkspaceList() {
  return (
    <div>
      <ul>
        {WORKSPACES.map((workspace) => (
          <WorkspaceItem key={workspace.id} workspace={workspace} />
        ))}
      </ul>
    </div>
  );
}
