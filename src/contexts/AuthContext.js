'use client';
import {createContext, useContext, useState, useEffect, useCallback} from "react";
import {getAuthToken, setAuthToken, removeAuthToken, getCurrentUser,setCurrentUser, removeCurrentUser,isTokenExpired, clearAuthData} from '../utils/jwt';
import { useRouter } from "next/router";



const AuthContext = createContext(null);
export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [isAuthenticate, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    
    // On initial load, try to load user from localStorage
    useEffect(
        () => {
            if (typeof window !== 'undefined') {
                const currentUser = localStorage.getItem('currentUser');
                if (currentUser) {
                    setUser(JSON.parse(currentUser));
                    setIsAuthenticated(true);
                } else {
                    setUser(null);
                    setIsAuthenticated(false);
                    
                }
            }
            setLoading(false);
        }, []
    );
    const signIn = async (userData) => {
        setUser(userData);
        setIsAuthenticated(true);
        if (typeof window !== 'undefined') {
        localStorage.setItem('userData', JSON.stringify(userData));
        }
    };

    const logout = async () => {
        setUser(null);
        setIsAuthenticated(false);
        if (typeof window !== 'undefined') {
            localStorage.removeItem('userData');

        }
    };
    const contextValue = {
        user,
        isAuthenticate,
        loading,
        signIn,
        logout
    };

    return (
        <AuthContext.Provider value ={contextValue}>
            {children}
        </AuthContext.Provider>
    );

}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
    
