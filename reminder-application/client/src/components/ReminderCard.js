import React from 'react'
import { Card } from 'react-bootstrap'

function ReminderCard({ title, time, description }) {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>Reminder Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Reminder Time</Card.Subtitle>
                    <Card.Text>Reminder Description</Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default ReminderCard
