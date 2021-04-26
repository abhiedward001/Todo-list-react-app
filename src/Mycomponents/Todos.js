import React from 'react'
import { Todolist } from "./Todolist";
export const Todos = (props) => {
    return (
        <div className="container">
        <h3 className="text-center my-3">Todo List</h3>
        {props.todos.length===0 ? "No Todos to Display" :
         props.todos.map((todo)=>{

            return(
            <>
             <Todolist todo={todo} key={todo.sno} onDelete={props.onDelete}></Todolist>
             <hr/>
             </>
            )
        })
         }
        
        </div>
    )
}
 