import { TaskList } from "./components/task-list/TaskList";

export default function App() {
  return (
    <>
      <header className="bg-[#FC5185] mb-2 px-25 py-2 rounded-md">
        <span className="text-4xl font-bold text-white uppercase">Today is the best day</span>
      </header>
      <main>
        <div className="flex justify-between mb-2">
          <button className="font-bold cursor-pointer bg-[#545B62] text-white p-2 rounded-md">Create List</button>
          <button className="font-bold cursor-pointer bg-[#FC5185] text-white p-2 rounded-md">Select List</button>
        </div>
        <TaskList />
      </main>
    </>
  )
}
