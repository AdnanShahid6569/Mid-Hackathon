import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import SignUp from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Dashboard from './Components/BasicComponents/Dashboard/Dashboard';
import Users from './Components/Screens/Users/Users';
import Custumer from './Components/Screens/Custumer/Custumer';
import ProtectedRoute from './Components/BasicComponents/ProtectedRoute/ProtectedRoute';
import Roomlist from './Components/Screens/Room/Roomlist';
// import RoomDetails from './Components/Screens/Room/RoomDetails';
import CreateRoom from './Components/Screens/Room/CreateRoom';
import ProfileCard from './Components/Screens/Profile/ProfileCard';
import PaymentForm from './Components/Screens/Payment/Payment';
import Services from './Components/Screens/Services/Services';
import AuthRoute from './Components/BasicComponents/ProtectedRoute/AuthRoute';
import AddServices from './Components/Screens/Services/AddServices';

const App = () => {
  return (
    <>

      <Routes>
        <Route element={<AuthRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
        </Route>


        {/* Parent route for Dashboard */}
        <Route path="/Dashboard" element={<Dashboard />}>
          {/* Admin can access Users */}
          <Route
            path="Users"
            element={
              <ProtectedRoute role="Admin">
                <Users />
              </ProtectedRoute>
            }
          />
          {/* Both Admin and User can access Custumer */}
          <Route
            path="custumer"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <Custumer />
              </ProtectedRoute>
            }
          />

          {/* Both Admin and User can access Room */}
          <Route
            path="Room"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <Roomlist />
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="Roomdetail/:id"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <RoomDetails />
              </ProtectedRoute>}
          /> */}

          <Route
            path="profile"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <ProfileCard />
              </ProtectedRoute>
            }
          />


          <Route
            path="payment"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <PaymentForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="Service"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <Services />
              </ProtectedRoute>
            }
          />



          <Route
            path="AddService"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <AddServices />
              </ProtectedRoute>
            }
          />


          <Route
            path="createRoom"
            element={
              <ProtectedRoute role={['Admin', 'User']}>
                <CreateRoom />
              </ProtectedRoute>}
          />
        </Route>

      </Routes>
    </>
  );
};

export default App;