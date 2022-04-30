import React from "react";
import { useNavigate } from "react-router-dom";
import { FormInput, NavLink } from "../GlobalStyledComp";


const Form = () => {
 const navigate= useNavigate()
 const user= {username:"user"}
  const handleSubmit =(e)=>{
e.preventDefault();
sessionStorage.setItem("user", JSON.stringify(user))
navigate("/home")
return 

  }
  return (
    <div>
      <form action="" style={{display: 'flex', flexDirection: 'column'}} onSubmit={(e)=>handleSubmit(e)}>
      <NavLink textColor={"black"} text>{`<Clarusway/>Recipe`}</NavLink> <br />
        <FormInput type="text" placeholder={"USERNAME"}  required/> <br />
        <FormInput type="password" placeholder={"PASSWORD"} required/> <br />
        <FormInput type="submit"  textColor="white" value="Login"  />
        
      </form>
    </div>
  );
};

export default Form;
