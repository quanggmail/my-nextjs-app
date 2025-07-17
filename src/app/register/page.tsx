'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Register() {
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    console.log('API_BASE_URL:', API_BASE_URL); // ADD THIS LINE
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
    const  handleSubmit = async (e) => {
        e.preventDefault();
        const registerUrl = `${API_BASE_URL}/api/auth/register`;
        console.log('Attempting to register to:', registerUrl); // ADD THIS LINE
        try {
            const res = await fetch(registerUrl, {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({username,password}),
            
            });
            
            console.log('Response object:', res);
            if (res.ok) {
               alert('ok');
            } else {
                console.log('Error inserting');
            }
        } catch(e) {
            console.log('Exception inserting', e);
        }
        
    }

    const handleOnChangeUsername = (e) =>{
        setUsername(e.target.value);
    }

    const handleOnChangePassword = (e) =>{
        setPassword(e.target.value);
    }

    return(
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <label>Username</label> <input type="text" name="Username" onChange={handleOnChangeUsername}/>
                <label>Password</label> <input type="password" name="password" onChange={handleOnChangePassword}/>
                <input type="submit" value ="Register"/>
            </form>
        </div>
    );
}