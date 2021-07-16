import { AuthState } from './AuthContext';

type AuthAction = 
| {type:'signIn'}
| {type: 'changeFavIcon', payload: string};

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
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        default:
            return state;
    }
}