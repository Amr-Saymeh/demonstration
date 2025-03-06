import React, { useEffect } from "react"; // Import React and useEffect
import './styles/verification-style.css'; // Import the CSS styling for the Verification page
import { Link } from 'react-router-dom'; // Import Link for routing

const Verification = () => {
    // useEffect hook to add and clean up a class on the body element when the component mounts and unmounts
    useEffect(() => {
        // Add the class to body when the component mounts
        document.body.classList.add("ver-container-body");

        // Clean up by removing the class when the component unmounts
        return () => {
            document.body.classList.remove("ver-container-body");
        };
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    return (
        <div className="verification-box"> {/* Container for the verification form */}
            <h1>Verify Your Account</h1> {/* Heading for the page */}
            <br />
            <p>
                We've sent a verification code to your email. <br />
                Please enter it below to continue.
            </p> {/* Message prompting the user to enter the verification code */}

            <form>
                <label>Verification Code:</label> {/* Label for the verification code input */}
                <input
                    type="text"
                    placeholder="Enter the verification code"
                    required
                /> {/* Input field for the user to enter the verification code */}
                <Link to="/reset-pass">
                    <button type="submit" className="verify-btn"> {/* Submit button to verify the code */}
                        Verify {/* Link to the reset password page upon verification */}
                    </button>
                </Link>
            </form>

            {/* Message displayed in case the user didn't receive the verification code */}
            <p>
                If you did not receive the code, check your spam folder or
                <Link to="/verification"> try again</Link>.
            </p>
        </div>
    );
};

export default Verification; // Export the Verification component
