import React,{useState,useEffect} from 'react'
import { Button } from '@mui/material'
import {TextField} from '@mui/material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate,NavLink } from "react-router-dom";
import {auth} from "../firebase"











const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const user = localStorage.getItem("uid");

    const navigate = useNavigate()

useEffect(()=>{
    if (user){
navigate("/card")
    }
})



const handleSubmit =(e)=>{
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (resolve) => {
        console.log("resolve", resolve);
        localStorage.setItem("uid", resolve.user.uid);
        navigate("/card");
      })
      .catch((err) => {
        alert(err, "error");
      });

}


  return (

    <>
    <form onSubmit={handleSubmit} sx={{mt:5}}>

      <TextField id="outlined-basic" label="Email" variant="outlined" type="email" required onChange={(e)=>{
setEmail(e.target.value)
      }}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" type="password" required onChange={(e)=>{
setPassword(e.target.value)
      }}/>
      <Button type='submit' color='error'>Login</Button>
    </form>

  <NavLink to="/signup"> <p>create account</p></NavLink>


    </>
  )
}

export default Login
