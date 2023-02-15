import React from 'react'
import './description.css'
import { useLocation ,useNavigate } from 'react-router-dom'
const Description = () => {
    const navigate=useNavigate();
    const {state}=useLocation();
  return (
    <>
        <div class="card" >

  <h1>Title:{state.title}</h1>
  <h4 >Description</h4>
<p>{state.description}</p>
<button className='button' onClick={()=>navigate("/")}>GotoHome</button>
</div>
    </>
  )
}

export default Description