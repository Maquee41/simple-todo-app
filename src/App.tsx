import { useState } from "react"
import { Modal } from "./components/modal/Modal"
import { TaskList } from "./components/task-list/TaskList"
import { WorkspaceSelect } from "./components/workspaces/workspace-select/WorkspaceSelect"
import { Header } from "./components/header/Header"
import { WorkspaceList } from "./components/workspaces/workspace-list/WorkspaceList"

export default function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

  return (
    <>
      <Header />
      <main>
        <div className='flex justify-between mb-2'>
          <button
            className='font-bold bg-[#545B62] text-white p-2 rounded-md'
            onClick={() => setIsSettingsOpen(true)}
          >
            <img src='/settings.svg' alt='settings' width={25} />
          </button>
          <div className='font-bold bg-[#FC5185] text-white p-2 rounded-md'>
            <WorkspaceSelect />
          </div>
        </div>
        <TaskList />
      </main>
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title='Settings'
      >
        <div className='flex justify-center gap-x-5'>
          <div>
            <div className='flex justify-between mb-4'>
              <h4 className='text-xl font-bold'>Workspaces</h4>
              <button>
                <img src='/plus.svg' alt='Add' width={25} />
              </button>
            </div>
            <div className='flex gap-x-3 mb-4'>
              <input
                type='text'
                placeholder='New Workspace Name'
                className='border-1 border-[#545B62] rounded-md px-2 py-1 focus:border-[#FC5185] focus:outline-[#FC5185]'
              />
              <button type='button'>
                <img src='/check.svg' alt='Apply' width={25} />
              </button>
            </div>
            <WorkspaceList />
          </div>
          <div>
            <h4 className='text-xl font-bold mb-4'>Options</h4>
            <div className='flex gap-2 items-center'>
              <label>Page Title</label>
              <input
                type='text'
                className='border-1 border-[#545B62] rounded-md px-2 py-1 focus:border-[#FC5185] focus:outline-[#FC5185]'
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
