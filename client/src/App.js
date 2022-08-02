import './App.css';
import {useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Comics from './components/Comics';
import ComicPage from './components/ComicPage';
import Members from './components/Members'
import NavBar from './components/NavBar';
import ModalShort from './components/CreateAccountForm';
import { Button } from 'semantic-ui-react';
import CreateAccountForm from './components/CreateAccountForm';


function App() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }
  console.log(user)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  // const navigate = useNavigate();
  // const handleClick = (e) => {
  //     navigate(`/comics/${id}`,  { replace: true })
  //     console.log(id)
  // }
  return (
    <>
    <CreateAccountForm open={open} handleClick={handleClick}/>
    <BrowserRouter>
      <NavBar user={user} onLogin={setUser} handleClick={handleClick}/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/comics" element={<Comics/>} />
        <Route path="/comics/:id" element={<ComicPage />} />
        <Route path="/members" element={<Members/>}> </Route>
      </Routes> 
    </BrowserRouter>
    </>
  )
}
export default App;
