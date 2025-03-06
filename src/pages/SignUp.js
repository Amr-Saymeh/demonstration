import React, { useState, useEffect } from "react";
import './styles/signUp-style.css'; // Import the CSS styling for the SignUp page
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing and useNavigate for navigation

const SignUp = () => {
    // useState hooks to manage state for form inputs and error messages
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate(); // useNavigate hook for navigating to different pages

    // Function to validate the email format using a regular expression
    const validateEmail = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setError("Invalid email format. Please use a valid email like example@example.com.");
            return false;
        }
        return true;
    };

    // Function to validate the password
    const validatePassword = () => {
        const minLength = 8; // Minimum password length requirement
        if (password.length < minLength) {
            setError("Password must be at least 8 characters long.");
            return false;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return false;
        }
        return true;
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (validateEmail() && validatePassword()) {
            setError(""); // Clear any existing error if validation passes

            // Check if the email already exists in localStorage
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.find(user => user.email === email);

            if (userExists) {
                setError("User with this email already exists. Please Sign In.");
            } else {
                // Save new user data to localStorage if email is unique
                const newUser = { firstName, lastName, email, password };
                existingUsers.push(newUser);
                localStorage.setItem('users', JSON.stringify(existingUsers));
                localStorage.setItem("isSignedIn", true);
                // Redirect to the home page after successful registration
                navigate("/sign-in");
            }
        }
    };

    // useEffect to add and clean up a class on the body element when the component is mounted and unmounted
    useEffect(() => {
        document.body.classList.add("signup-container-body");

        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove("signup-container-body");
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="signUp-container">
            <h1>Sign up</h1>
            <h4>Join us - it's quick, easy, and totally free!</h4>
            <form onSubmit={handleSubmit}>
                {/* Input fields for first name and last name */}
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name</label>
                        <input
                            type="text"
                            placeholder="Enter your first name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} // Update firstName state
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input
                            type="text"
                            placeholder="Enter your last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)} // Update lastName state
                            required
                        />
                    </div>
                </div>
                {/* Input field for email */}
                <div className="form-row">
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="example@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} // Update email state
                            required
                        />
                    </div>
                </div>
                {/* Input fields for password and confirm password */}
                <div className="form-row">
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Create a strong password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Re-enter your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                            required
                        />
                    </div>
                </div>
                {/* Display error message if validation fails */}
                {error && <p className="error-msg">{error}</p>}
                {/* Submit button to trigger the form submission */}
                <button type="submit" className="submit-btn">Create Account</button>
            </form>
            {/* Link to the Sign In page if the user already has an account */}
            <p>Already have an account? <Link to="/sign-in">Sign in here</Link></p>
        </div>
    );
};

export default SignUp; // Export the SignUp component
