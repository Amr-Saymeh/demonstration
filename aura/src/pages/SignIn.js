import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import './styles/signIn-style.css';

const SignIn = () => {
    // State variables for email, password, and error message
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // `useNavigate` hook for programmatic navigation
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Retrieve the list of users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Trim and normalize inputs for better comparison
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();

        // Check if a user exists with matching email and password
        const user = users.find(user =>
            user.email.toLowerCase() === trimmedEmail.toLowerCase() && user.password === trimmedPassword
        );

        if (user) {
            // If a match is found, save the current user in localStorage
            localStorage.setItem("currentUser", JSON.stringify(user));

            localStorage.setItem("isSignedIn", true);
            // Redirect to the home page
            navigate("/home");

        } else {
            // If no match is found, display an error message
            setError("Invalid email or password. Please try again.");
        }
    };

    useEffect(() => {
        // Add a specific CSS class to the body when the component mounts
        document.body.classList.add("signin-container-body");

        // Cleanup: Remove the CSS class when the component unmounts
        return () => {
            document.body.classList.remove("signin-container-body");
        };
    }, []);

    return (
        <div className="signin-container">
            {/* Sign In Header */}
            <h1>Sign In</h1>
            <br />
            <br />
            {/* Form for user login */}
            <form onSubmit={handleSubmit}>
                {/* Email Input */}
                <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update email state
                    />
                </div>

                {/* Password Input */}
                <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} // Update password state
                    />
                </div>

                {/* Remember Me and Forgot Password Link */}
                <div className="remember-forget">
                    <label>
                        <input type="checkbox" className="checkboxes" />
                        Remember Me
                    </label>
                    <Link to="/forgot-pass">Forgot Password?</Link>
                </div>
                <br />

                {/* Error Message */}
                {error && <p className="error-msg">{error}</p>}

                {/* Submit Button */}
                <button type="submit">Sign In</button>
                <br />

                {/* Social Media Login Options */}
                <h2>Or sign in with</h2>
                <br />
                <div className="social-buttons">
                    <a
                        href="https://www.facebook.com/login"
                        className="social-btn fb"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                        href="https://twitter.com/login"
                        className="social-btn twitter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a
                        href="https://accounts.google.com/ServiceLogin"
                        className="social-btn google"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-google"></i>
                    </a>
                </div>

                {/* Link to Sign Up Page */}
                <div className="createAccount">
                    <span>Don't have an account? <Link to="/sign-up">Sign Up</Link></span>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
