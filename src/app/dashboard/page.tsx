'use client';
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

const DashboardContent = () => {
  const {user, isAuthenticate, loading, logout } = useAuth();
  const router = useRouter();
  useEffect( () => {
    console.log('Auth Check: loading', loading, 'isAuthenticate', isAuthenticate, 'user', user); // Add console logs for debugging
    console.log('!isAuthenticate && !loading', !isAuthenticate && !loading);
    if(!isAuthenticate && !loading) {
      router.replace('/'); 
    }
  }
    , [isAuthenticate, loading, router]);

    return (
        <div>
      <h1>Welcome to the Dashboard!</h1>
      <p>This is the main dashboard content.</p>
    </div>
    );
}
export default DashboardContent;