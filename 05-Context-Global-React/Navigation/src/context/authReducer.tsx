import { AuthState } from './AuthContext';

type AuthAction = 
| {type:'signIn'}
| {type: 'changeFavIcon', payload: string}
| {type: 'logout'}
| {type: 'changeUserName', payload: string};

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
        case 'logout':
            return {
                ...state,
                isLoggedIn: false,
                username: undefined,
                favoriteIcon: undefined
            }
        case 'changeUserName':
            return {
                ...state,
                username: action.payload
            }

        default:
            return state;
    }
}