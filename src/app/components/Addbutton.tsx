"use client";

import React, { useContext } from "react";
import { Task } from "./Task";
import { AllContext } from "./Context";

interface Inputprops {
  tasks: Task[];
  task: string;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Addbutton = () => {
  const { task, handleClick, tasks }: Inputprops = useContext(AllContext);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4 ml-3"
        type="button"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default Addbutton;
