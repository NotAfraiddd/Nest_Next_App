interface AuthProps {
    isAuthenticated: boolean;
    loginWithRedirect: () => Promise<void>;
  }