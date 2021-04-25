import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const [ error, setError ] = useState(() => '');
    const [ loading, setLoading ] = useState(() => false);
    const { login } = useAuth();
    const history = useHistory();

    const handleSubmit = async event => {
        event.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/');
        } catch(err) {
            console.error(err);
            setError(err.message);
        }

        setLoading(false);
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Log In</h2>
                    { error && <Alert variant="danger">{ error }</Alert> }

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

                        <Button
                            type="submit"
                            className="w-100"
                            disabled={ loading }    
                        >Log In</Button>
                    </Form>

                    <div className="w-100 text-center mt-3">
                        <Link to="forgot-password">forgot password?</Link>
                    </div>
                </Card.Body>
            </Card>

            <div className="w-100 text-center mt-2">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
    );
}

export default Login;
