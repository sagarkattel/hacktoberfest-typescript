"use client";
import { addTodos, transferIntoCompleted, transferIntoDoing } from "@/redux/features/todoSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, { useState } from "react";
import { BiTask } from "react-icons/bi";
import { TbActivityHeartbeat } from "react-icons/tb";

const Todo = () => {
  const [input, setInput] = useState<string>("");
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useAppDispatch();

  const handleInput = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodos(input));
    setInput("");
  };

  const handleDoing=(id:any)=>{
    dispatch(transferIntoDoing(id));

  }

  const handleCompleted=(id:any)=>{
    dispatch(transferIntoCompleted(id));
    
  }
  return (
    <div className="flex flex-col">
      <div>Todos</div>
      <form onSubmit={handleInput}>
        <div className="flex flex-row">
          <div>
            <input
              type="text"
              name="todo"
              className="bg-red-300 w-[560px] ml-[330px] h-[40px] rounded-xl p-3"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 rounded-xl text-white font-bold py-2 px-4 ml-3"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </div>
      </form>

      <div className="flex flex-row justify-center gap-[180px] mt-10">
        <div>
          <h1 className="text-red-400 flex justify-center items-center font-bold">
            TODO
          </h1>
          {todos
            .filter((todo) => !todo.isDoing && !todo.isCompleted)
            .map((todo) => (
              <div className="flex flex-row gap-4" key={todo.id}>
                {todo.text}
                <button onClick={()=>handleDoing(todo.id)}>
                  <TbActivityHeartbeat size={23} />
                </button>
                <button onClick={()=>handleCompleted(todo.id)}>
                  <BiTask size={23} />
                </button>
              </div>
            ))}
        </div>

        <div>
          <h1 className="text-red-400 flex justify-center items-center font-bold">
            Doing
          </h1>
          {todos
            .filter((todo) => todo.isDoing && !todo.isCompleted)
            .map((todo) => (
              <div className="flex flex-row gap-4" key={todo.id}>
                {todo.text}

                <button  onClick={()=>handleCompleted(todo.id)}>
                  <BiTask size={23} />
                </button>
              </div>
            ))}
        </div>

        <div>
          <h1 className="text-red-400 flex justify-center items-center font-bold">
            Completed
          </h1>
          {todos
            .filter((todo) => todo.isCompleted)
            .map((todo) => (
              <div className="flex justify-center items-center" key={todo.id}>
                {todo.text}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
