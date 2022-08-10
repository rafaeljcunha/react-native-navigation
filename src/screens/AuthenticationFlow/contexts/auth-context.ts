import { createContext } from 'react';
import { AuthContextProps } from '../types';

export const AuthenticatedContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  handleAuthentication: () => {},
});
