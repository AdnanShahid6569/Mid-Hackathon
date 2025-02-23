import React, { useState } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import styles from './SignUp.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import auth, { db } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import Login from '../Login/Login';
import { doc, setDoc } from 'firebase/firestore';

const SignUp = () => {
    const [selValue, setSelValue] = useState('');
    const [name,setname] = useState();
    const [lastname,setlastname] = useState();
    const [email,setemail] = useState();
    const [pass,setpass] = useState();
    const [showLogin, setShowLogin] = useState(false); 
    const navigate = useNavigate()

    const userObj={
        name,
        lastname,
        email,
        pass,
        selValue
    }
    const handleClick=(e)=>{
        setSelValue(e.target.value)
    }

    
  const signUpData=()=>{

console.log(name,lastname,email,pass,selValue);

if (selValue === 'Admin' || selValue === 'User') {
        <Login bhejo={selValue} />
  } else {
    alert('Please select a role (Admin or User)');
  }
createUserWithEmailAndPassword(auth, email, pass)
  .then( async(userCredential) => {
    const user = userCredential.user;
    console.log(user)

    const uid = userCredential.user.uid

    const setData = await setDoc(doc(db,'users',uid),userObj)
    console.log(setData);
    

navigate('/login')
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

<Box sx={{ minWidth: 120, maxWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selValue}
          label="Role"
          onChange={handleClick}
          
        >
          <MenuItem value='Admin'>Admin</MenuItem>
          <MenuItem value='User'>User</MenuItem>
        </Select>
      </FormControl>
    </Box>
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
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
    </Container>
    </>
  )
}

export default SignUp