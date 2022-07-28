import React from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useState } from "react"

const Login_form =() => {
    const [username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
        })
        .then((r) => r.json())
        .then((user) => console.log('goods'));
    }

    return (
        <Segment inverted>
          <Form inverted>
            <Form.Group widths='equal'>
              <Form.Input fluid label='Username' placeholder='Username' />
              <Form.Input fluid label='Password' type="password" placeholder='Password' />
            </Form.Group>
            <Button type='submit'>Submit</Button>
          </Form>
        </Segment>
    )
}

export default Login_form