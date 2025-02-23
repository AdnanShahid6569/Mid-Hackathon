import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from '../../../firebaseConfig';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import User from '../../Screens/User/User';

function Login() {
  const [email,setemail] = useState();
  const [pass,setpass] = useState();
  const [name,setname] = useState();

  const [store,setStore]= useState();
  const navigate = useNavigate();


  const signInData=()=>{
console.log(email,pass);
signInWithEmailAndPassword(auth, email, pass)
  .then( async(userCredential) => {
    // Signed in 
    // const user = userCredential.user;
    const userID = userCredential.user.uid;
    // console.log(user);
    // console.log(userID);

    const getData = await getDoc(doc(db,'users',userID))
    
    setStore(getData.data());
    
    localStorage.setItem('userData',JSON.stringify(getData.data()))

    localStorage.setItem('UID',JSON.stringify(userID))

    
  navigate('/Dashboard')
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });


  }

  return (
    <Container maxWidth="xl" className={styles.container}>
      <Box className={styles.formContainer}>
        <Typography variant="h4" className={styles.heading}>
          Login
        </Typography>
        <form className={styles.form}>
        <TextField
          onChange={(e)=>setname(e.target.value)}
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            className={styles.inputField}
          />
          <TextField
          onChange={(e)=>setemail(e.target.value)}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            className={styles.inputField}
          />
          <TextField
          onChange={(e)=>setpass(e.target.value)}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            className={styles.inputField}
          />
          <Button
            onClick={signInData}
            variant="contained"
            color="primary"
            fullWidth
            className={styles.loginBtn}
          >
            Login
          </Button>
        </form>

    
        {/* SignUp Link */}
        <Typography variant="body2" className={styles.signupLink}>
          Don't have an account? <Link to="/">SignUp</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;