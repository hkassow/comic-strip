import React from 'react'
import { Button, Form, Segment, Menu,MenuItem, Input, MenuMenu } from 'semantic-ui-react'
import { useState } from "react"

const LoginForm =({onLogin, handleToggle}) => {
    const [loginError,setLoginError] = useState(null)
    const [user, setUser] = useState({
      username: null,
      password: null
    })

    const handleChange = (e) => {
      const {placeholder, value} = e.target
      setUser({...user, [placeholder]:value})
      if (loginError) {
        setTimeout(() => {  setLoginError(false) }, 3000);
    }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const {username, password} = user
        fetch("/login", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        })
        .then((r) => {
          if (r.ok) {
            r.json().then(user => onLogin(user))
            handleToggle()
          } else {
            setLoginError(true)
            r.json().then(error => console.log(error))
          }
        })
    }

    return  (
          // <Form inverted compact onSubmit={handleSubmit}>
          //   <Form.Group >
          //     <Form.Input error={loginError} fluid label='Username' placeholder='username' onChange={handleChange}/>
          //     <Form.Input error={loginError} fluid label='Password' type="password" placeholder='password' onChange={handleChange}/>
          //     <Button type='submit'>Submit</Button>
          //     <Button  onClick={handleToggle}>x</Button>
          //   </Form.Group>
          // </Form>
          <MenuMenu >
            <MenuItem style={{"marginLeft": "auto", "marginRight": "auto"}}>
              <Input error={loginError} placeholder='username' onChange={handleChange}></Input>
            </MenuItem>
            <MenuItem style={{"padding-left": "5px"}}>
              <Input error={loginError} placeholder='password' type='password' onChange={handleChange}></Input>
            </MenuItem>
            <MenuItem position='right'>
              <Button onClick={handleSubmit}>Submit</Button>
            </MenuItem>
            <MenuItem position='right'>
              <Button  onClick={handleToggle}>x</Button>
            </MenuItem>
          </MenuMenu>
    )
}

export default LoginForm