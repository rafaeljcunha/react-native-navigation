export type AuthContextProps = {
  isAuthenticated: boolean;
  handleAuthentication(): void;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
