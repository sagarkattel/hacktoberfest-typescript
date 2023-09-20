"use client";

import React, { useState, createContext, ChangeEvent } from "react";
import { Task } from "./Task";

export const AllContext = createContext<any>(null);

const Context = ({ children }: any) => {
  const [task, setTask] = useState<string>("");

  const [tasks, setTasks] = useState<Task[]>([]);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!task) {
      return;
    }
    const newTask: Task = {
      id: Math.floor(Math.random() * 1000),
      task,
      isCompleted: false,
      isDoing: false,
    };
    setTasks((prevState) => [...prevState, newTask]);
    setTask("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  return (
    <AllContext.Provider
      value={{ task, tasks, handleClick, handleChange, setTasks }}
    >
      {children}
    </AllContext.Provider>
  );
};

export default Context;
