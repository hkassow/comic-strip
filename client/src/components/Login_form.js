import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useState } from "react"

const Login_form =() => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        console.log('bang')
        e.preventDefault();
        fetch("/login", {
            method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        })
        .then((r) => r.json())
        .then((user) => console.log(user));
    }

    return (
        <Segment inverted>
          <Form inverted onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
              <Form.Input fluid label='Password' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
    )
}

export default Login_form