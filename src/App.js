import "./App.css";
import Header from "./Mycomponents/Header"
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import { AddTodo } from "./Mycomponents/AddTodo";
import React,{useState} from 'react';


function App() {
  const onDelete=(todo)=>{
   setTodos(todos.filter((e)=>{
     return e!==todo;
   }))
  }
  const addTodo=(title,desc)=>{

    let k=todos.length +1;
    const mytodo={
      sno:k,
      title:title,
      desc:desc,
    }
    setTodos([...todos,mytodo]);
    console.log(mytodo);

  }
  const [todos,setTodos] =useState([
    // {
    //   sno: 1,
    //   title: "I will learn react ",
    //   desc: "Will learn react from codewithharry"
    // },
    // {
    //   sno: 2,
    //   title: "Will do CP daily ",
    //   desc: "Practice on codeforces"
    // },
    // {
    //   sno:3,
    //   title:"complete the dsa course ",
    //   desc:"Learn dsa fron CN and practice the babbar bhai sheet"
    //   },
    
  ])

  return (

    <>
      <Header title="My Todos List" search={false}></Header>
      <AddTodo addTodo={addTodo}> </AddTodo>
      <Todos todos={todos} onDelete={onDelete}></Todos>
      <Footer />
    </>
  );
}

export default App;
