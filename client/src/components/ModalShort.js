import React from 'react'
import { Button, Form, Message } from 'semantic-ui-react'
import './Modal.css';


function ModalShort({open, handleClick}) {
    if (!open) {
        return null
    }


    return (
        <div class="outer">
            <div class="middle">
                <div class="inner">
                    <Form width ='equal'    size='huge' style={{width: "80%", "margin-left": "auto", "margin-right": "auto"}}>
                        <Form.Input fluid label='username' placeholder='username' />
                        <Form.Input fluid label='password' placeholder='password' />
                        <Form.Input fluid label='password' placeholder='retype password' />
                        <Button type='submit'>Submit</Button>
                        <Message
                            error
                            content= 'error messages to be conditionally rendered'
                        />
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default ModalShort

//<div class='trial'>
{/* <div class="container-fluid">
<div>hi</div>
</div>
</div>  */}