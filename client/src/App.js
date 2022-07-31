import './App.css';
import Login_form from './components/Login_form';
import {useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Comics from './components/Comics';
import Members from './components/Members'
import NavBar from './components/NavBar';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  // if (user) {
  //   return <h2>Welcome, {user.username}!</h2>;
  // } else {
  //   return <Login_form onLogin={setUser} />;
  // }
  return (
    <BrowserRouter>
      <NavBar onLogin={setUser}/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/comics" element={<Comics/>}> </Route>
        <Route path="/members" element={<Members/>}> </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;
