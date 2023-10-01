"use client";
import React from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { decrement, increment } from '@/redux/features/counterSlice';

const Counter = () => {
    const count=useAppSelector((state)=>state.counter);
    const dispatch = useAppDispatch()
  return (
    <div>
        <div>
            Count is {count}
        </div>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <br />
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter