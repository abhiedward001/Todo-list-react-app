import React from 'react'

export const AddTodo = () => {
    return (
        <div className="container my-3" >
            <form>
            <h3 className="text-center">Add a Todo</h3>

        <div className="mb-3 my-5">
          <label for="title" className="form-label">Todo Title</label>
          <input type="email" className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">Add Description</label>
          <input type="text" className="form-control" id="desc"/>
        </div>
       
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form>
        </div>
        
    )
}
