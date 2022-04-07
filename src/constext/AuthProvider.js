import React, { createContext } from 'react';
import useFirebae from '../hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allcontext = useFirebae();
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;