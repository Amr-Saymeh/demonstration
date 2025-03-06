import React, { useEffect } from "react"; // Import React and useEffect
import './styles/resetPassword-style.css'; // Import the CSS styling for the Reset Password page
import { Link } from 'react-router-dom'; // Import Link for routing

const ResetPassword = () => {
    // useEffect hook to add and clean up a class on the body element when the component mounts and unmounts
    useEffect(() => {
        // Add the class to body when the component mounts
        document.body.classList.add("reset-container-body");

        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove("reset-container-body");
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="reset-box"> {/* Container for the reset password form */}
            <h1>Reset Password</h1> {/* Heading for the page */}
            <form>
                {/* Label and input for the user to enter their new password */}
                <label>Enter new Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                />

                {/* Label and input for the user to confirm their new password */}
                <label>Confirm Password:</label>
                <input
                    type="password"
                    placeholder="Confirm your password"
                />

                {/* Submit button to confirm the password reset, which links to the Sign In page */}
                <Link to="/sign-in">
                    <button type="submit" className="reset-btn">
                        Confirm {/* Link to Sign In page upon confirmation */}
                    </button>
                </Link>
            </form>
        </div>
    );
};

export default ResetPassword; // Export the ResetPassword component
