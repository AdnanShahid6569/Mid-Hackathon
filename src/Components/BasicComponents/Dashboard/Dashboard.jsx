import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { Button, Collapse, Divider, ListItemText } from '@mui/material';
import { GiFlowerPot } from "react-icons/gi";
import { AiOutlineLogout } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import SubjectIcon from '@mui/icons-material/Subject';
import { LuNewspaper } from "react-icons/lu";

import { FaSchool } from "react-icons/fa";

import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 250;

export default function Dashboard() {
  const [room, setRoom] = React.useState(false);
  const navigate = useNavigate();
  const nav = useNavigate();

  const data = localStorage.getItem("UserData")
  const parseData = JSON.parse(data)
  // console.log(parseData);
  const role = parseData.selValue;

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar elevation={20} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#0f7978' }}>
        <Toolbar>
          <GiFlowerPot style={{ fontSize: '40px' }} />
          <Typography variant="h6" noWrap component="div" sx={{
            flexGrow: 1,
            textAlign: 'center'
          }}>
            Hotel Management System
          </Typography>

          <Button onClick={() => {
            localStorage.removeItem("UserData")
            localStorage.removeItem("uid")
            nav('/Login')
          }}
            variant='contained' color="white"><AiOutlineLogout style={{ fontSize: '32px' }} /> &nbsp;Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto', background:'#F3F3E0'}}>

          <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              {role === "Admin" ? <ListItemButton onClick={()=>{navigate('Users')}}>
                
                <ListItemIcon>
                  <AccessibilityNewIcon style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="User" />
              </ListItemButton> : console.log('You User')
              }
            </ListItem>

          </List>
          {role === "Admin" ? <Divider />: console.log("No")}


          <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{navigate('profile')}}>
                
                <ListItemIcon>
                  <AccessibilityNewIcon style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />

          <List>

            
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{navigate('custumer')}}>
                <ListItemIcon>
                  <AccessibilityNewIcon style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="Customer" />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />


          {/* Second Teacher */}
          <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{setRoom(!room)}}>
                <ListItemIcon>
                  <FaChalkboardTeacher style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Room" />
              </ListItemButton>
            </ListItem>

            <Collapse in={room} timeout='auto' >
            <List component = 'div' disablePadding>
            <ListItem>
              <ListItemButton onClick={()=>{navigate("Room")}}>
                <ListItemIcon>
                  <FaChalkboardTeacher style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="RoomList" /> 
              </ListItemButton>
            </ListItem>
            </List>

            </Collapse>

                     </List>
          <Divider />


  {/*Fourth Syllabus */}
  <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{navigate("payment")}}>
                <ListItemIcon>
                <LuNewspaper style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Payment" />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />

          {/*Five School  */}
          <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{navigate('Service')}}>
                <ListItemIcon>
                <FaSchool style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Service"/>
              </ListItemButton>
            </ListItem>

              </List>
          <Divider />

           {/*Five School  */}
           <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{navigate('Inventry')}}>
                <ListItemIcon>
                <FaSchool style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Inventry"/>
              </ListItemButton>
            </ListItem>

              </List>
          <Divider />

        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 ,background:'#FBFFE4'}}>
        <Toolbar />
       <Outlet />
      
      </Box>
    </Box>
  );
}
