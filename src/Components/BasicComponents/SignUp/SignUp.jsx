import React, { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import styles from './SignUp.module.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db } from '../../../firebaseConfig';
import { collection, doc, setDoc } from 'firebase/firestore';
import User from '../../Screens/User/User';
const SignUp = () => {

  const [name,setname] = useState();
  const [lastname,setlastname] = useState();
  const [email,setemail] = useState();
  const [pass,setpass] = useState();
  const [store,setStore] = useState();

  const navigate = useNavigate();

  let objUser={
    name,email
  }
  const signUpData=()=>{
console.log(name,lastname,email,pass);
createUserWithEmailAndPassword(auth, email, pass)
  .then(async(userCredential) => {
    const user = userCredential.user;
    const userID = userCredential.user.uid;
    console.log(user);
    console.log(userID);

    const setData = await setDoc(doc(db,'users',userID),objUser)
    setStore(setData);
    
    {store && <User list={store} />}
    navigate('/Login')
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });


  }
  return (
    <>
     <Container maxWidth="xl" className={styles.container}>
      <Box className={styles.formContainer}>
        <Typography variant="h4" className={styles.heading}>
          SignUp
        </Typography>
        <form className={styles.form}>
          <TextField
          onChange={(e)=>setname(e.target.value)}
            label="First Name"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
          onChange={(e)=>setlastname(e.target.value)}
            label="Last Name"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
          onChange={(e)=>setemail(e.target.value)}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <TextField
          onChange={(e)=>setpass(e.target.value)}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            
          />
          <Button
            
            variant="contained"
            color="primary"
            fullWidth
            className={styles.signupBtn}
            onClick={signUpData}
          >
            SignUp
          </Button>
        </form>
        <Typography variant="body2" className={styles.loginLink}>
          Already have an account? <Link to="Login">Login</Link>
        </Typography>
      </Box>
    </Container>
    </>
  )
}

export default SignUp