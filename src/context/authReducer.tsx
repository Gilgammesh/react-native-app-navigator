import { authInitialState, AuthState } from './AuthContext'

type AuthActions = {
  type: 'signIn' | 'signOut' | 'selectIcon'
  payload?: any
}

const authReducer = (state: AuthState, action: AuthActions): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'Carlos Santander'
      }
    case 'signOut':
      return { ...authInitialState }
    case 'selectIcon':
      return {
        ...state,
        favoriteIcon: action.payload
      }
    default:
      return state
  }
}

export default authReducer
