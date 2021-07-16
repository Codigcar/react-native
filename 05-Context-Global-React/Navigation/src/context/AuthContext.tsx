import React, { useReducer } from 'react'
import { createContext } from "react"
import { authReducer } from './authReducer';


// Definir cómo luce, qué información tendré aqui
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado Inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined
}

// Lo usaremos para decirle a React como luce y qué expone el context 
// Todo lo que tendrá los hijos
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    logout: () => void;
    changeUserName: (username: string) => void
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componentes proveedor del estado
export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({type:'signIn'});
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const logout = () => {
        dispatch({type: 'logout'});
    }

    const changeUserName = (username: string) => {
        dispatch({type:'changeUserName', payload: username})
    }

    return (
        <AuthContext.Provider value={{
            // authState: authInitialState,
            // signIn: () => {}
            authState: authState,
            signIn: signIn,
            changeFavoriteIcon,
            logout: logout,
            changeUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}
