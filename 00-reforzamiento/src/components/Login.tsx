import React, { useEffect, useReducer } from 'react'



interface AuthState {
    validando: boolean,
    token: string | null,
    username: string,
    nombre: string
}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username: string,
    nombre: string
}

type AuthAction = 
    | {type:'logout'}
    | {type:'login', payload: LoginPayload /* {username: string, nombre: string} */ };


const authReducer = (state: AuthState, action: AuthAction): AuthState  => {
    switch (action.type) {
        case 'logout':
            return{
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        case 'login':{
            return {
                validando: false,
                token: '123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }
        }
        default:
            return state;
    } 
}   

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
        setTimeout(() => {
            dispatch({type:'logout'})
        }, 1500);
    }, [])

    const login = () => {
        dispatch({type: 'login', payload:{nombre:'Carlos', username:'Carlos123'}})
    }

    const logout = () => {
        dispatch({type:'logout'})
    }


    if(state.validando){
        return(
            <>
                <h1>Login</h1>  
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <>
          <h1>Login</h1>
          {
              (state.token)
                ?  <div className="alert alert-success">Autenticado... como {state.nombre}</div>
                : <div className="alert alert-danger">No autenticado...</div>
          } 
          {
              (state.token)
                ?  <button onClick={logout} className="btn btn-danger">Logout</button>
                :  <button onClick={login} className="btn btn-primary">Login</button>
          }
          
          
        </>
    )
}
