// src/app/dashboard/DashboardClientLayout.tsx (This is a complete file)
'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'; // Example: if Breadcrumb is a Client Component
import Sidebar from '../components/Sidebar/Sidebar';       // Example: if Sidebar is a Client Component
import styles from './DashboardLayout.module.css';
import { useAuth } from '@/contexts/AuthContext';


export function DashboardClientLayout({ children }: { children: React.ReactNode }) {
    const {user, isAuthenticate, isLoading, signIn, logout} = useAuth();
     const handleLogout = () => {
        logout(); // Call the logout function from context
        // AuthContext should handle redirection (e.g., to /login) after logout
    };
    return (
        <AuthProvider>
            <div className={styles.dashboardContainer}>
                <header className={styles.header}>
                    <Breadcrumb />
                    <div className={styles.logoutContainer}>
                    <button onClick={handleLogout} className={styles.logoutButton}>
                        Logout
                    </button>
                </div>
                </header>
                <div className={styles.mainContentArea}>
                    <Sidebar />
                    <main className={styles.content}>{children}</main>
                </div>
            </div>
        </AuthProvider>
    );
}