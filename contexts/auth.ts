// // utils/auth.ts
// import React, { createContext, useContext, useState, ReactNode } from 'react';

// interface User {
//   name: string;
//   role: string;
//   // Add other user properties as needed
// }

// interface AuthContextType {
//   isAuthenticated: boolean;
//   user: User | null;
//   login: (user: User) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [user, setUser] = useState<User | null>(null);

//   const login = (user: User) => {
//     setIsAuthenticated(true);
//     setUser(user);
//   };

//   const logout = () => {
//     setIsAuthenticated(false);
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };