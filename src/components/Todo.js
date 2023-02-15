import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./todo.css";
const Todo = () => {
  const [userData, setuserData] = useState([]);
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch("/fetchalltodos", {
        method: "GET",
        headers: {
          Accept: "application/json", //for accepting token
          "Content-Type": "application/json",
        },
        credentials: "include", //for token
      });

      const data = await res.json(); //data contains all the data of the user
      console.log(data);
      setuserData(data);
      //  console.log(data[0].activity);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      navigate("/signin");
    }
  };
  useEffect(() => {
    callAboutPage(); //cannot use async function inside useeffect
  }, []);
  const clickHandler=(title,description)=>{
navigate("/description",{
  state:{
    title:title,
    description:description
  },
})
  }
  return (
    <div>
      {userData.map((e, i) => {
        return (
          <>
        
            <div className="cards" onClick={()=>clickHandler(e.title,e.description)}>
              <div className="containers">
                <h4>
                  <b>{e.title}</b>
                </h4>
                
              </div>
            </div>
            
          </>
        );
      })}
    </div>
  );
};

export default Todo;
