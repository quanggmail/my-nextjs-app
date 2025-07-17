'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const DashboardContent = () => {
  const {user, isAuthenticate, loading, logout } = useAuth();
  const router = useRouter();
  useEffect( () => {
    console.log('Auth Check: loading', loading, 'isAuthenticate', isAuthenticate, 'user', user); // Add console logs for debugging
    
    if(!isAuthenticate && !loading) {
      router.push('/');
    }
  }
    , [isAuthenticate]);

    return (
        <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is the main dashboard content.</p>
    </div>
    );
}
export default DashboardContent;