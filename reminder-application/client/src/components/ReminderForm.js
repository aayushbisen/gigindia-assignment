import React, { useRef,useState } from 'react'

import {Form,Button} from 'react-bootstrap'

import Datetime from 'react-datetime'


function ReminderForm() {

    const title = useRef()
    const desc = useRef()
    const [time, setTime] = useState()

    function handleSubmit(e){
        e.preventDefault();
        console.log(title.current.value,desc.current.value);
    }

    return (
        <>
        <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control ref={title} required type="text" placeholder="Enter title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDesc">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={desc} type="text" placeholder="Enter description" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date and Time</Form.Label>
                    <Datetime/>
                </Form.Group>
                <Button variant="primary" type="submit"  block>
                    Create Reminder
                </Button>
            </Form>
        </>
    )
}

export default ReminderForm
