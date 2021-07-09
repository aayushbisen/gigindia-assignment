import React, {useState} from 'react'

import { useAuth } from '../context/AuthContext'

import { Form, Button , Container, Alert} from 'react-bootstrap'

function LoginForm({history}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const {login, currentUser} = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        

        try {
            setError('')
            await login(email,password)
            history.push('/')
        } catch {
            setError('Failed to login!')
        }
    }
    

    return (
        <Container fluid='sm'>
            <h1 className='text-center mb-5'>Login</h1>
            {/* {currentUser && currentUser.email} */}
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit"  block>
                    Login
                </Button>
            </Form>
        </Container>
    )
}

export default LoginForm
