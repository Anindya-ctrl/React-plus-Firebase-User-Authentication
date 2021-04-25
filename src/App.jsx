import React from 'react';
import Signup from './components/Signup';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
            <div className="w-100" style={{ maxWidth: '400px' }}>
                <Signup />
            </div>
        </Container>
    );
}

export default App;