import React, { useRef, useState } from 'react';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [ error, setError ] = useState(() => '');
    const [ loading, setLoading ] = useState(() => false);
    const { currentUser, signup } = useAuth();

    const handleSubmit = async event => {
        event.preventDefault();

        if(passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError('Make sure both passwords match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value);
        } catch(err) {
            console.error(err);
            setError(err.message);
        }

        setLoading('');
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Sign Up</h2>
                    { error && <Alert variant="danger">{ error }</Alert> }
                    { /* TEST */ currentUser && console.log(currentUser) }

                    <Form onSubmit={ handleSubmit }>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                ref={ emailRef }
                                required
                            />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={ passwordRef }
                                required
                            />
                        </Form.Group>
                        <Form.Group id="confirm-password">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                ref={ confirmPasswordRef }
                                required
                            />
                        </Form.Group>

                        <Button
                            type="submit"
                            className="w-100"
                            disabled={ loading }    
                        >Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                Already have an account? Log In
            </div>
        </>
    );
}

export default Signup;
