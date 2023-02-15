import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
// import CreateTodo from './CreateTodo';
import Todo from './Todo';
const Home = () => {
  const [userData, setuserData] = useState("");
  const [show,setShow]=useState(false)
  const navigate = useNavigate();
 const handleOnclick=()=>{
  navigate('/createtodo')
 }
const callAboutPage = async () => {
try {
  const res = await fetch('/about', {
    method: "GET",
    headers:{
      Accept:"application/json",//for accepting token
    
    },
    credentials:"include"//for token
  });



    const data = await res.json();//data contains all the data of the user
    console.log(data);
 setuserData(data.name);
 setShow(true)


} catch (error) {
  console.log(error);
       navigate('/register')
}
}
useEffect(() => {
callAboutPage();//cannot use async function inside useeffect
});
  return (
    <>
     
      {show?<Todo/>:null}
      <button onClick={handleOnclick}>AddBlog</button>
      {/* <CreateTodo/> */}
      </>
    
     

      
    
  )
}

export default Home
