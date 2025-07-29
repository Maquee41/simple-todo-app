import { useState } from "react";
import { Modal } from "./components/modal/Modal";
import { TaskList } from "./components/task-list/TaskList";
import { WorkspaceList } from "./components/workspaces/workspace-list/WorkspaceList";
import { WorkspaceSelect } from "./components/workspaces/workspace-select/WorkspaceSelect";

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#FC5185] mb-2 px-25 py-2 rounded-md">
        <span className="text-4xl font-bold text-white uppercase">
          Today is the best day
        </span>
      </header>
      <main>
        <div className="flex justify-between mb-2">
          <button
            className="font-bold bg-[#545B62] text-white p-2 rounded-md"
            onClick={() => setIsSettingsOpen(true)}
          >
            <img src="/settings.svg" alt="settings" width={25} />
          </button>
          <div className="font-bold bg-[#FC5185] text-white p-2 rounded-md">
            <WorkspaceSelect />
          </div>
        </div>
        <TaskList />
      </main>
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Settings"
      >
        <div className="flex justify-center gap-x-5">
          <div>
            <div className="flex justify-between mb-4">
              <h4 className="text-xl font-bold">Workspaces</h4>
              <button>
                <img src="/plus.svg" alt="Add" width={25} />
              </button>
            </div>
            <WorkspaceList />
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Options</h4>
            <div className="flex gap-2 items-center">
              <label>Page Title</label>
              <input
                type="text"
                className="border-1 border-[#545B62] rounded-md px-2 py-1 focus:border-[#FC5185] focus:outline-[#FC5185]"
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}
