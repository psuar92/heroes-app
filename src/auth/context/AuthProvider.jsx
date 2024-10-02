import { useReducer } from 'react';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { types } from '../types/types';

// Initialize localStorage
const init = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return {
    logged: !!user,
    user,
  }
}

export const AuthProvider = ({ children }) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const login = async( name = '' ) => {

    const user = { id: 'ABC', name }

    const action = { type: types.login, payload: user }

    localStorage.setItem('user', JSON.stringify(user)); // Saves user to localStorage
    
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem('user'); // Removes user from localStorage

    const action = { type: types.logout };

    dispatch(action);
  }

  return (
    <AuthContext.Provider value={{ 
      ...authState,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}
