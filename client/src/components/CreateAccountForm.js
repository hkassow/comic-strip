import React from "react";
import { Form, Modal, Button, Icon, Header } from "semantic-ui-react";
import { useState } from "react";

const CreateAccountForm = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
        <Modal
            closeIcon
            open={open}
            trigger={<Button>Create Account</Button>}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header icon='archive' content='Archive Old Messages' />
            <Modal.Content>
            </Modal.Content>
            <Modal.Actions>
                <Button color='red' onClick={() => setOpen(false)}>
                <Icon name='remove' /> No
                </Button>
                <Button color='green' onClick={() => setOpen(false)}>
                <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}

export default CreateAccountForm