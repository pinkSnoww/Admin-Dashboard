// /contexts/AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Export the User interface
export interface User {
  isAdmin: any;
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
  const [isAdmin,setIsAdmin]=useState(false)
  const login = (userData: User) => {
    setIsAuthenticated(true);
    setUser(userData);
    setIsAdmin(true)
  };

  const logout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false)
    setUser(null);

  };
  const handleLogin = (userData: any) => {
    login({
      name: userData.name,
      role: userData.role,
      isAdmin: userData.role === 'admin',
      isSettingAllowed: false
    });
  };
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, handleLogin,login, logout }}>
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