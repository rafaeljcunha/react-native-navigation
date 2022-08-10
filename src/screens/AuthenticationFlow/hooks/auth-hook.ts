import { useContext } from 'react';
import { AuthenticatedContext } from '../contexts';
import { AuthenticatedProvider } from '../providers';
import { AuthContextProps } from '../types';

function useAuthentication(): AuthContextProps {
  const context = useContext(AuthenticatedContext);
  return context;
}

export { AuthenticatedProvider, useAuthentication };
