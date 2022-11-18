import React ,{ useEffect, useState }from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection,  setDoc,addDoc, doc } from "firebase/firestore";
import { Button } from '@mui/material'
import {TextField} from '@mui/material'
import { useNavigate,Link } from "react-router-dom";
import {auth,db} from "../firebase"



const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [lastName, setlastName] = useState("");
  const [firstName, setfirstName] = useState("");
  const user = localStorage.getItem("uid");

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/card");
    }
  }, []);


const handleSignup = (e)=>{

  e.preventDefault();
  console.log("submit form");
  const dbCollection = collection(db, "users");


  createUserWithEmailAndPassword(auth, email, password)
      .then(async (resolve) => {
        console.log("resolve", resolve);
        const obj = {
          firstName,
          lastName,
          email,
          uid: resolve.user.uid,
        };
        // await addDoc(dbCollection, obj);
        await setDoc(doc(db, "users", resolve.user.uid), obj);
        navigate("/");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  return (
    <>
     <form onSubmit={handleSignup} sx={{mt:5}}>

<TextField id="outlined-basic" label="Email" variant="outlined" type="email" required onChange={(e)=>{
setEmail(e.target.value)
}}/>
<TextField id="outlined-basic" label="Password should be 6 letters" variant="outlined" type="password" required onChange={(e)=>{
setPassword(e.target.value)
}}/>

<TextField id="outlined-basic" label="Frist Name" variant="outlined" type="text" required onChange={(e)=>{
setfirstName(e.target.value)
}}/>
<TextField id="outlined-basic" label="Last Name" variant="outlined" type="tect" required onChange={(e)=>{
setlastName(e.target.value)
}}/>
<Button type='submit' color='error'>Signup</Button>
</form>

<Link to="/"> <p>login</p></Link>
    </>
  )
}







export default Signup
