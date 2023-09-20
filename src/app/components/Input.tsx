'use client'
import React, { ChangeEvent, useContext } from 'react'
import { AllContext } from './Context'

interface Inputprops{
    task:string,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = () => {

  const {task,handleChange}:Inputprops=useContext(AllContext);
  return (
    <div className="flex flex-row">
        <input className="bg-red-300 w-[560px] ml-[330px] h-[40px] rounded-xl p-3" type="text" name='task' value={task} onChange={handleChange}/>
    </div>
  )
}

export default Input