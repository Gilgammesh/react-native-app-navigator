import React, { createContext, useReducer } from 'react'
import authReducer from './authReducer'

// Propiedades del State de Usuarios
export interface AuthState {
  isLoggedIn: boolean
  username?: string
  favoriteIcon?: string
}

// Estado inicial
export const authInitialState: AuthState = {
  isLoggedIn: false
}

// Lo usaremos para decirl a React como luce y que expone el context
export interface AuthContextProps {
  authState: AuthState
  signIn: () => void
  signOut: () => void
  selectIcon: (icon: string) => void
}

// Creamos el contexto
export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps)

// Component proveedor del estado
export const AuthProvider = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState)

  const signIn = () => dispatch({ type: 'signIn' })

  const signOut = () => dispatch({ type: 'signOut' })

  const selectIcon = (icon: string) => dispatch({ type: 'selectIcon', payload: icon })

  const value: AuthContextProps = {
    authState,
    signIn,
    signOut,
    selectIcon
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
