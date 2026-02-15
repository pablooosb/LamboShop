import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './RegisterPage.css';

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: '', 
        password: '', 
        firstName: '', 
        lastName: '', 
        email: '', 
        birthDate: ''
    });
    
    const [error, setError] = useState<string>('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const isOldEnough = (date: string): boolean => {
        const today = new Date();
        const birthDate = new Date(date);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age >= 18;
    };

    const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!isOldEnough(formData.birthDate)) {
            setError("Registration failed: You must be at least 18 years old.");
            return;
        }

        setError("");
        console.log("User registered & Auto-logged in:", formData);
        alert("Account created successfully! Logging you in...");
    };

    return (
        <div className="register-page">
            <div className="register-card">
                <h2>Create Account</h2>
                {error && <div className="error-banner">{error}</div>}
                
                <form onSubmit={handleRegister}>
                    <div className="form-grid">
                        <input 
                            type="text" 
                            name="firstName" 
                            placeholder="First Name" 
                            onChange={handleChange} 
                            value={formData.firstName}
                            required 
                        />
                        <input 
                            type="text" 
                            name="lastName" 
                            placeholder="Last Name" 
                            onChange={handleChange} 
                            value={formData.lastName}
                            required 
                        />
                    </div>

                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        onChange={handleChange} 
                        value={formData.username}
                        required 
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email Address" 
                        onChange={handleChange} 
                        value={formData.email}
                        required 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        onChange={handleChange} 
                        value={formData.password}
                        required 
                    />
                    
                    <div className="date-section">
                        <label>Date of Birth</label>
                        <input 
                            type="date" 
                            name="birthDate" 
                            onChange={handleChange} 
                            value={formData.birthDate}
                            required 
                        />
                    </div>

                    <button type="submit" className="btn-register">Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;