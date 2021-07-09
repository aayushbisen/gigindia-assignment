import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'

import { useAuth } from '../context/AuthContext'
import ReminderForm from './ReminderForm'

function Home() {
    const { currentUser } = useAuth()

    const content = (
        <Row>
            <Col xs={12} md={8}>Reminders</Col>
            <Col xs={12} md={4}><ReminderForm/></Col>
        </Row>
    )

    return (
        <Container>


            {
                currentUser === null ? (
                    <h2 className='text-center my-5'>
                        Login to create reminders ⏰
                    </h2>

                ) : (
<>
                    <h2 className='text-center my-5'>
                        Welcome {currentUser.email}!
                    </h2>
                    {content}
                    </>
                )
            }

            
        </Container>
    )
}

export default Home
