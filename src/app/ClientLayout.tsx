// src/app/ClientLayout.tsx
'use client'; // This component is a client component

import { AuthProvider } from '../contexts/AuthContext'; // Path from src/app to src/contexts

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}