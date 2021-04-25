import React from 'react'

export const Todolist = (props) => {
    return (
        <div>
            <h4 className=" my-3">{props.todo.title}</h4>
            <p className="my-3">{props.todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</button>
        </div>
    )
}
