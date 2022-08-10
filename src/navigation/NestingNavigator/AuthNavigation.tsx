import React, { useMemo } from 'react';
import { useAuthentication } from '../../screens/AuthenticationFlow/hooks';
import AuthStackNavigator from './navigators/AuthStackNavigator';
import AuthTabNavigator from './navigators/AuthTabNavigator';

export function AuthNavigation() {
  const { isAuthenticated } = useAuthentication();

  const SwitchAuthNavigator = useMemo(() => {
    if (isAuthenticated) {
      return AuthTabNavigator;
    }
    return AuthStackNavigator;
  }, [isAuthenticated]);

  return <SwitchAuthNavigator />;
}
