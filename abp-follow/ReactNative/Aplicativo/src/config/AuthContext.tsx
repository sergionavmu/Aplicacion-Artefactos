import React, { createContext, useState, ReactNode } from 'react';
import Usuario from '../model/Usuario';

export const AuthContext = createContext<{
    isLoggedIn: boolean;
    userId: string;
    userName: string;
    name: string;
    surName: string;
    email: string;
    password: string;
    user: Usuario;
    setLoggedIn: (loggedIn: boolean) => void;
    setUserId: (userId: string) => void;
    setName: (name: string) => void;
    setSurName: (surNam: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    setUserName: (userName: string) => void;
    setUser: (user: Usuario) => void;
}>({
    isLoggedIn: false,
    userId: '',
    userName: '',
    name: '',
    surName: '',
    email: '',
    password: '',
    user: new Usuario,
    setUserId: () => {},
    setLoggedIn: () => {},
    setUserName: () => {},
    setUser: () => {},
    setName: () => {},
    setSurName: () => {},
    setEmail: () => {},
    setPassword: () => {}
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userId, setUserId] = useState('');
    const [userName, setUserName] = useState('');
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUsu] = useState(new Usuario);

    const setLoggedIn = (loggedIn: boolean) => {
        setIsLoggedIn(loggedIn);
    }

    const setUser = (user: Usuario) => {
        setUsu(user);
    }

    return (
        <AuthContext.Provider value={{ isLoggedIn, userId, userName, name, surName, email, password, user,
            setLoggedIn, setUserId, setUserName, setName, setSurName, setEmail, setPassword, setUser}}>
            {children}
        </AuthContext.Provider>
    );
}