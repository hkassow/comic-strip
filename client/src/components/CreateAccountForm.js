import React, { useState } from 'react'
import { Button, Form, Message } from 'semantic-ui-react'


function CreateAccountForm({open, handleClick, onLogin}) {
    const [anyErrors, setAnyErrors] = useState(false)
    const [errorMessages, setErrorMessages] = useState('')
    const [formData, setFormData] = useState({
        username: '',
        pass1: '',
        pass2: ''
    })
    if (!open) {
        return null
    }
    const formSubmit = (e) => {
        e.preventDefault();
        if (formData.pass1 !== formData.pass2) {
            setAnyErrors(true)
            setErrorMessages('passwords must match')
        } else {
            const user = {username: formData.username, password: formData.pass1}
            fetch("/users",{
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(user)
            })
            .then(res => {
                if (res.ok) {
                    res.json()
                    fetch("/login", {
                        method: "POST",
                        headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(user),
                    })
                    .then(r => r.json()).then(user => {
                        handleClick()
                        onLogin(user)}
                        )
                } else {
                    res.json().then(data => setErrorMessages(data.errors[0]))
                    setAnyErrors(true)
                }
            })

        }

    }
    const handleChange = (e) => {
        if (anyErrors) {
            setTimeout(() => {  setAnyErrors(false) }, 3000);
        }
        const [key, value] = [e.target.id, e.target.value]
        setFormData({...formData, [key]: value})
    }
    return (
        <div className="outer">
            <div className="middle">
                <div className="inner">
                    <Form id='create-account' error={anyErrors} width='equal' size='huge' style={{width: "80%", "marginLeft": "auto", "marginRight": "auto"}}>
                        <Form.Input id='username' label='username' placeholder='username' onChange={handleChange}/>
                        <Form.Input id='pass1' label='password' type="password" placeholder='password' onChange={handleChange}/>
                        <Form.Input id='pass2' label='re-type password' type="password" placeholder='password' onChange={handleChange}/>
                        <Message
                            error
                            content= {errorMessages}
                        />
                        <Button style={{float: "left"}} type='submit' onClick={formSubmit} >Submit</Button>
                        <Button style={{float: "right"}} onClick={handleClick}>X</Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CreateAccountForm