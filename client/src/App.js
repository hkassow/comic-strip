import './App.css';
import {useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home'
import Comics from './components/Comics';
import ComicPage from './components/ComicPage';
import NavBar from './components/NavBar';
import CreateAccountForm from './components/CreateAccountForm';
import ReadList from './components/ReadList';


function App() {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open)
  }

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <>
    <CreateAccountForm open={open} onLogin={setUser} handleClick={handleClick}/>
    <BrowserRouter>
      <NavBar user={user} onLogin={setUser} handleClick={handleClick}/>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/comics" element={<Comics/>} />
        <Route path="/comics/:id" element={<ComicPage user={user}/>} />
        <Route path="/readlist" element={<ReadList user={user}/>}> </Route>
      </Routes> 
    </BrowserRouter>
    </>
  )
}
export default App;
