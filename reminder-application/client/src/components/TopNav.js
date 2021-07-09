import React from 'react'

import {

    Navbar, Container, Nav

} from 'react-bootstrap'

import { useAuth } from '../context/AuthContext'

function TopNav() {

    const { currentUser, logout } = useAuth()

    function handleLogout(e){
        e.preventDefault()
        logout()
    }

    return (
        <>
            <Navbar bg='light' expand='lg'>
                <Container>
                    <Navbar.Brand href='/'>
                        RemindeMe!
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse>
                        {currentUser === null ? (
                            <Nav className='ml-auto'>
                                <Nav.Link href='/login'>Login</Nav.Link>
                                <Nav.Link href='/register' >SignUp</Nav.Link>
                            </Nav>
                        ) : (
                            <Nav className='ml-auto'>
                                <Nav.Link href='/' onClick={handleLogout}>Logout</Nav.Link>
                            </Nav>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default TopNav
