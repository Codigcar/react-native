import { AuthState } from './AuthContext';

type AuthAction = {type:'signIn'};

// mejor llamado generaEstado (reducer)
export const authReducer = (state: AuthState, action: AuthAction) : AuthState => {
    switch (action.type) {
        case 'signIn':
            const NuevoEstado = {
                ...state,
                isLoggedIn: true,
                username:'Carlos'
            }
            return NuevoEstado;
    
        default:
            return state;
    }
}