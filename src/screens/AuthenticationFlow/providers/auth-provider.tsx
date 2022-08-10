import React, { useState } from 'react';
import { AuthenticatedContext } from '../contexts';
import { AuthProviderProps } from '../types';

export function AuthenticatedProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function handleAuthentication() {
    setIsAuthenticated(prevState => !prevState);
  }

  return (
    <AuthenticatedContext.Provider
      value={{ handleAuthentication, isAuthenticated }}>
      {children}
    </AuthenticatedContext.Provider>
  );
}
