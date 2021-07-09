import React, {useState} from 'react'

import { useAuth } from '../context/AuthContext'

import { Form, Button , Container, Alert} from 'react-bootstrap'

function RegisterForm({history}) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordK, setPasswordK] = useState('')

    const [error, setError] = useState('')

    const {register, currentUser} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        if(password !== passwordK){
            return setError('Passwords do not match!')
        }

        try {
            setError('')
            await register(email,password)
            history.push('/')
        } catch {
            setError('Dailed to register!')
        }
    }
    

    return (
        <Container fluid='sm'>
            <h1 className='text-center mb-5'>Register</h1>
            {/* {currentUser && currentUser.email} */}
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordK">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control value={passwordK} onChange={(e)=>setPasswordK(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit"  block>
                    Register
                </Button>
            </Form>
        </Container>
    )
}

export default RegisterForm
