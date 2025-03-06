import React, { useEffect } from "react"; // Import React and useEffect hook
import './styles/forgotPassword-style.css'; // Import CSS styling for the Forgot Password page
import { Link } from 'react-router-dom'; // Import Link for routing between pages

const ForgotPassword = () => {

    // useEffect hook to add and clean up a class on the body element when the component mounts and unmounts
    useEffect(() => {
        // Add the class to the body when the component mounts
        document.body.classList.add("forgot-container-body");

        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove("forgot-container-body");
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="forgot-password-box"> {/* Container for the forgot password form */}
            <h1>Forgot Password</h1> {/* Heading for the page */}
            <p>Remember your password? <Link to="/sign-in">Sign in</Link></p> {/* Link to sign in page if the user remembers their password */}
            <form>
                {/* Label and input for the user to enter their email address */}
                <label>Email Address:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                />

                <Link to="/verification"> {/* Submit button to reset password, which links to the Verification page */}
                    <button type="submit" className="reset-btn">
                        Reset Password{/* Link to the verification page */}
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default ForgotPassword; // Export the ForgotPassword component
