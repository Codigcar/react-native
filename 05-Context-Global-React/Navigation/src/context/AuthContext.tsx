import React from 'react'
import { createContext } from "react"


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
}

// Crear el context
export const AuthContext = createContext({} as AuthContextProps);

// Componentes proveedor del estado
export const AuthProvider = ({children}:any) => {
    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => {}
        }}>
            {children}
        </AuthContext.Provider>
    )
}