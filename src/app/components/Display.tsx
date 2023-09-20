
import React, { useContext } from "react";
import { Task } from "./Task";

import { BiTask } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";
import { AllContext } from "./Context";

interface Propdisplay {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

const Display = () => {
  const { setTasks, tasks }: Propdisplay = useContext(AllContext);

  const handleDoing = (taskToUpdate: Task) => {
    // Find the index of the task to update
    const taskIndex = tasks.findIndex((task) => task.id === taskToUpdate.id);

    // Create a copy of the tasks array to avoid mutating the state directly
    const updatedTasks = [...tasks];

    // Update the isDoing property of the task
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      isDoing: true, // Update isDoing to true
    };

    // Update the state with the modified tasks array
    setTasks(updatedTasks);
  };

  const handleCompleted = (taskToUpdate: Task) => {
    // Find the index of the task to update
    const taskIndex = tasks.findIndex((task) => task.id === taskToUpdate.id);

    // Create a copy of the tasks array to avoid mutating the state directly
    const updatedTasks = [...tasks];

    // Update the isDoing property of the task
    updatedTasks[taskIndex] = {
      ...updatedTasks[taskIndex],
      isCompleted: true, // Update isDoing to true
    };

    // Update the state with the modified tasks array
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-row gap-[220px] items-center justify-center my-[40px]">
      <div className="">
        <h1 className="font-bold text-xl">Todo</h1>
        <div className="pt-[30px]">
          {tasks
            .filter((task) => !task.isCompleted && !task.isDoing)
            .map((task) => (
              <div key={task.id} className="flex flex-row gap-4">
                <li>{task.task}</li>
                <button onClick={() => handleDoing(task)}>
                  <TbActivityHeartbeat size={23} />
                </button>
                <button onClick={() => handleCompleted(task)}>
                  <BiTask size={23} />
                </button>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl">Doing</h1>
        <div className="pt-[30px]">
          {tasks
            .filter((task) => !task.isCompleted && task.isDoing)
            .map((task) => (
              <div key={task.id} className="flex flex-row gap-4">
                <li>{task.task}</li>
                {/* <button onClick={() => handleDoing(task)}>
          <TbActivityHeartbeat size={23} />
        </button> */}
                <button onClick={() => handleCompleted(task)}>
                  <BiTask size={23} />
                </button>
              </div>
            ))}
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl">Completed</h1>
        <div className="pt-[30px]">
          {tasks
            .filter((task) => task.isCompleted)
            .map((task) => (
              <div key={task.id} className="flex flex-row gap-4">
                <li>{task.task}</li>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Display;
