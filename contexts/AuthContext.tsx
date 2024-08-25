
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface User {
  isAdmin: boolean;
  name: string;
  role: string;
  isSettingAllowed: boolean;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  handleLogin: (userData: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const handleLogin = (userData: any) => {
    login({
      name: userData.name,
      role: userData.role,
      isAdmin: userData.role === 'admin',
      isSettingAllowed: userData.role === 'admin', 
    });
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};