import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ResetPassword from './components/ResetPassword';
import { AuthProvider} from './contexts/AuthContext';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PrivateRoute from './routes/privateRoute';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '80vh' }}>
                <div className="w-100" style={{ maxWidth: '400px' }}>
                    <AuthProvider>
                        <Router>
                            <Switch>
                                <PrivateRoute path="/" component={ Dashboard } exact />
                                <Route path="/signup" component={ Signup } />
                                <Route path="/login" component={ Login } />
                                <Route path="/login" component={ Login } />
                                <PrivateRoute path="/forgot-password" component={ ResetPassword } />
                            </Switch>
                        </Router>
                    </AuthProvider>
                </div>
            </Container>
    );
}

export default App;
