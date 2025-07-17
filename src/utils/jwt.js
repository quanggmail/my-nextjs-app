// src/utils/auth.js (or auth.ts)

// Helper function to decode JWT (very basic, for 'exp' check)
// In a real app, use a library like 'jwt-decode' for more robust parsing.
export const decodeJwt = (token) => {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("Failed to decode JWT:", e);
        return null;
    }
};

// Check if token is expired
export const isTokenExpired = (token) => {
    if (!token) {
        return true; // No token means it's "expired" or invalid
    }
    const decoded = decodeJwt(token);
    if (!decoded || !decoded.exp) {
        return true; // Token not decodable or no expiration claim
    }

    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp < currentTime; // Is expiration time less than current time?
};

// --- localStorage Helpers ---
export const getAuthToken = () => localStorage.getItem('authToken');
export const setAuthToken = (token) => localStorage.setItem('authToken', token);
export const removeAuthToken = () => localStorage.removeItem('authToken');

export const getCurrentUser = () => {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
};
export const setCurrentUser = (user) => localStorage.setItem('currentUser', JSON.stringify(user));
export const removeCurrentUser = () => localStorage.removeItem('currentUser');

export const clearAuthData = () => {
    removeAuthToken();
    removeCurrentUser();
};