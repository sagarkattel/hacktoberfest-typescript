import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid"; // Import nanoid function


type todoProp = {
    id: string|number; // Assuming 'id' should be a string
    text: string; // Assuming 'text' is a string
    isDoing:boolean;
    isCompleted:boolean;
  };

  type TodoState = {
    todos: todoProp[]; // Assuming todoProp is the type of individual todo items
  };

const initialState:TodoState={
    todos:[{id:1,text:"Hello",isDoing:false,isCompleted:false}],
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            const todo:todoProp={
                id:nanoid(),
                text:action.payload,
                isDoing:false,
                isCompleted:false,
            }
            state.todos.push(todo);
        },
        removeTodos:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        transferIntoDoing:(state,action)=>{
            const updateTodo=state.todos.find((todo)=>todo.id===action.payload);
            if (updateTodo){
                updateTodo.isDoing=true
            }
        },
        transferIntoCompleted:(state,action)=>{
            const updateTodo=state.todos.find((todo)=>todo.id===action.payload);
            if(updateTodo){
                updateTodo.isCompleted=true;
            }
        }
    }
})

export const {addTodos,removeTodos,transferIntoDoing,transferIntoCompleted}=todoSlice.actions;

export default todoSlice.reducer;