import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import styles from './Login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import auth, { db } from '../../firebaseConfig';
import { doc, getDoc, getDocs } from 'firebase/firestore';
import SignUp from '../Signup/Signup';

function Login() {   
    
  const [selectedValue, setSelectedValue] = useState('');
  const [email,setemail] = useState();
  const [pass,setpass] = useState();
  const [name,setname] = useState();

  const [store,setStore] = useState(null);

  const navigate = useNavigate();
const handleClick=(e)=>{
    setSelectedValue(e.target.value)
    // console.log(selectedValue);
    
}

  const signInData=()=>{

console.log(email,pass);
signInWithEmailAndPassword(auth, email, pass)
  .then( async(userCredential) => {
    const userID = userCredential.user.uid;
    const getData = await getDoc(doc(db,'users',userID))
if(getData.exists()){

  const data = getData.data();
  console.log(data); 
  localStorage.setItem('UserData',JSON.stringify(data))
  localStorage.setItem('uid',JSON.stringify(userID))
  setStore(data); 

  const role = data.selValue;
  if(role === "User" && selectedValue === "User"){
    navigate("/Dashboard")
     
   }

   if(data.name === "Adnan" && data.lastname === "Shahid" && data.email === 'adnan@gmail.com' && data.selValue === "Admin" && data.pass === "adnan123"){

     if(role === "Admin" && selectedValue === "Admin"){
       
      navigate('/Dashboard')
      
      } 
    }
       
   if(role === "Admin" && selectedValue === "User" || role === "User" && selectedValue === "Admin"){
    alert(`Please Select a ${role}`)
   }
  
  }

else{console.log('no ');
}


      
  // navigate('/Dashboard')    
  
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

          <Box sx={{ minWidth: 120, maxWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Role"
          onChange={handleClick}
        >
          <MenuItem value='Admin'>Admin</MenuItem>
          <MenuItem value='User'>User</MenuItem>
        </Select>
      </FormControl>
    </Box>

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
          Don't have an account? <Link to="/signup">SignUp</Link>
        </Typography>
      </Box>
    </Container>
  );
}

export default Login;