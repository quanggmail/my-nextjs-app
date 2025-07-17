// src/app/dashboard/DashboardClientLayout.tsx (This is a complete file)
'use client';

import { AuthProvider } from '@/contexts/AuthContext';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'; // Example: if Breadcrumb is a Client Component
import Sidebar from '../components/Sidebar/Sidebar';       // Example: if Sidebar is a Client Component
import styles from './DashboardLayout.module.css';

export function DashboardClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <div className={styles.dashboardContainer}>
                <header className={styles.header}>
                    <Breadcrumb />
                </header>
                <div className={styles.mainContentArea}>
                    <Sidebar />
                    <main className={styles.content}>{children}</main>
                </div>
            </div>
        </AuthProvider>
    );
}