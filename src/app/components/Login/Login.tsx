"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from './Login.module.css';
import {useAuth} from '../../../contexts/AuthContext';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const handleOnChangeUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (username == '' || password == '') {
            setError('Enter username and password');
            return;
        }
        const loginUrl = `${API_BASE_URL}/api/auth/login`; // <--- Define URL here
        console.log('Attempting to fetch from:', loginUrl); // <--- CRITICAL DEBUGGING LOG

        try {
            const response = await fetch(loginUrl, {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({username, password}),
            });
            console.log('Response object:', response);
            if (response.ok) {
                const data = await response.json();
                localStorage.setItem('authToken', data.token);
                localStorage.setItem('currentUser', JSON.stringify(data.user));
                router.push('dashboard');
            } else {
                setError('Login failed');
            }

        } catch (err) {
            console.error('Network or unexpected error:', err);
            setError('Network error. Please try again later.');
        } finally {
            setLoading(false);
        }
        
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleOnSubmit} className={styles.form}>
                
                {error && <div className={styles.error}> {error} </div>}
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Username</label><input type="text" onChange={handleOnChangeUsername} disabled={loading}></input>
                    <label className={styles.label}>Password</label><input type="password" onChange={handleOnChangePassword} disabled={loading}></input>
                </div>
            
                <div> <input className={styles.submitButton}  type="submit" value={loading ? 'Loggin in ...' : 'Login'} disabled={loading}/></div>
            </form>
        </div>
    );
}
export default Login;