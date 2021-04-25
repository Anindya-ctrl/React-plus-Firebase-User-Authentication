import React, { useState, useEffect, useContext, createContext } from 'react';
import { auth } from '../firebaseSetup';

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [ currentUser, setCurrentUser ] = useState();
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return unsubscribe;
    });

    const value = {
        currentUser,
    };

    return (
        <AuthContext.Provider value={ value }>
            { children }
        </AuthContext.Provider>
    );
}
