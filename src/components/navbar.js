
import logoImage from "../images/AURA.png";
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import "../pages/styles/navbar-style.css"

const Navbar = ({ IsWithSearch = true, extended = true, searchTerm, setSearchTerm }) => {

    const savedTheme = localStorage.getItem('darkMode') === 'true';
    let profileImage = localStorage.getItem('profileImage') || 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg';
    const [Menu, SetMenu] = useState(false);
    const [isChecked, setIsChecked] = useState(savedTheme);
    const [isSignedIn, setIsSignedIn] = useState(() => {
        const storedStatus = localStorage.getItem('isSignedIn');
        return storedStatus ? JSON.parse(storedStatus) : false;  // Default to false if not set
    });
    useEffect(() => {
        localStorage.setItem('isSignedIn', JSON.stringify(isSignedIn));
    }, [isSignedIn]);


    useEffect(() => {
        if (!isChecked) {
            document.querySelector("body").classList.add("dark-mode");
        } else {
            document.querySelector("body").classList.remove("dark-mode");
        }
        localStorage.setItem('darkMode', isChecked.toString());
    }, [isChecked]);

    const toggleTheme = () => {
        setIsChecked(prevChecked => !prevChecked);
    };

    const ToggleMenu = () => {
        SetMenu(!Menu);
    }
    const sign_out = () => {
        localStorage.setItem("isSignedIn", false);
        setIsSignedIn(false);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.menu') && !event.target.closest('.burger')) {
                SetMenu(false);
                document.getElementById("burger").checked = false
            }
        };
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    const settingsModal = document.getElementById("settingsModal");

    const openSettings = () => {
        settingsModal.style.display = "flex";
    };

    return (
        <div className={IsWithSearch ? "" : "no-search"}>
            <nav className="shop-styling">
                <Link to="/home" className="logo" />
                <img
                    className="logo"
                    src={logoImage}
                    alt="logo"
                />
                <div className="group">
                    <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
                        <g>
                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                    </svg>
                    <input
                        placeholder="Search"
                        type="search"
                        className="input"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>


                <div className="burger" >
                    <label htmlFor="burger">
                        <input type="checkbox" id="burger" onChange={ToggleMenu} />
                        <span />
                        <span />
                        <span />
                    </label>
                </div>

                <div>
                    {!isSignedIn ? (
                        // If not signed in, show a button with a profile icon that links to /sign-in
                        <Link to="/sign-in">
                            <button className="profile profile-button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
                                    <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
                                </svg>
                            </button>
                        </Link>
                    ) : (
                        // If signed in, show the user's profile photo and link to /profile
                        <Link to="/profile">
                            <div className="profile">
                                <img
                                    src={profileImage}
                                    width="50px"
                                    alt="User Profile"
                                />
                            </div>
                        </Link>
                    )}
                </div>

            </nav>
            {Menu && (
                <div className="menu">
                    <div className="menu-card">
                        <ul className="list">
                            <Link to="/home">
                                <li className="element">

                                    <svg
                                        class="icon"
                                        stroke="currentColor"
                                        fill="currentColor"
                                        stroke-width="0"
                                        viewBox="0 0 1024 1024"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                                        ></path>
                                    </svg>
                                    <p className="label">Home</p>

                                </li>
                            </Link>
                            {!IsWithSearch && (
                                <Link to="/shop">
                                    <li className="element">

                                        <i className="fa-solid fa-store"></i>

                                        <p className="label">Shop</p>
                                    </li>
                                </Link>
                            )}
                            {extended && (
                                <Link to="/community">
                                    <li className="element">

                                        <i className="fa-regular fa-comments"></i>

                                        <p className="label">Community</p>
                                    </li>
                                </Link>)}

                            {IsWithSearch && (
                                <li className="element no-s">
                                    <div className="m-search">
                                        <form className="form">
                                            <label htmlFor="search">
                                                <input className="input" type="text" required placeholder="Search" id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                                <div className="fancy-bg" />
                                                <div className="search">
                                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="r-14j79pv r-4qtqp9 r-yyyyoo r-1xvli5t r-dnmrzs r-4wgw6l r-f727ji r-bnwqim r-1plcrui r-lrvibr">
                                                        <g>
                                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                                                        </g>
                                                    </svg>
                                                </div>
                                                <button className="close-btn" type="reset">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                    </svg>
                                                </button>
                                            </label>
                                        </form>
                                    </div>
                                </li>
                            )}

                            <Link to="/cart">
                                <li className="element">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1em"
                                        height="1em"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        fill="none"
                                        stroke="currentColor"
                                        className=""
                                    >
                                        <circle r="1" cy="21" cx="9"></circle>
                                        <circle r="1" cy="21" cx="20"></circle>
                                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                                    </svg>
                                    <p className="label">Cart</p>

                                </li>
                            </Link>
                            <Link to="/wishlist">
                                <li className="element">
                                    <svg
                                        viewBox="0 0 512 512"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="icon inactive"
                                    >
                                        <path
                                            d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                                        ></path>
                                    </svg>
                                    <p className="label">Wishlist</p>
                                </li>
                            </Link>
                        </ul>

                        <div className="separator" />
                        <ul className="list">
                            {isSignedIn && (
                                <Link to="/upload">
                                    <li className="element">

                                        <i className="fa fa-plus-square" style={{ fontSize: '21px' }}></i>

                                        <p className="label c-fix">Create</p>
                                    </li>
                                </Link>
                            )}
                            <li className="element" onClick={() => openSettings()}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 20 20" height="20" fill="none" className="svg-icon"><g stroke-width="1.5" stroke-linecap="round" stroke="#fff"><circle r="2.5" cy="10" cx="10"></circle><path fill-rule="evenodd" d="m8.39079 2.80235c.53842-1.51424 2.67991-1.51424 3.21831-.00001.3392.95358 1.4284 1.40477 2.3425.97027 1.4514-.68995 2.9657.82427 2.2758 2.27575-.4345.91407.0166 2.00334.9702 2.34248 1.5143.53842 1.5143 2.67996 0 3.21836-.9536.3391-1.4047 1.4284-.9702 2.3425.6899 1.4514-.8244 2.9656-2.2758 2.2757-.9141-.4345-2.0033.0167-2.3425.9703-.5384 1.5142-2.67989 1.5142-3.21831 0-.33914-.9536-1.4284-1.4048-2.34247-.9703-1.45148.6899-2.96571-.8243-2.27575-2.2757.43449-.9141-.01669-2.0034-.97028-2.3425-1.51422-.5384-1.51422-2.67994.00001-3.21836.95358-.33914 1.40476-1.42841.97027-2.34248-.68996-1.45148.82427-2.9657 2.27575-2.27575.91407.4345 2.00333-.01669 2.34247-.97026z" clip-rule="evenodd"></path></g></svg>
                                <p className="label">Settings</p>
                            </li>
                            <li className="element" onClick={() => toggleTheme()}>
                                <label htmlFor="themeToggle" className="themeToggle st-sunMoonThemeToggleBtn" type="checkbox">
                                    <input type="checkbox" id="themeToggle" className="themeToggleInput" checked={isChecked} onChange={toggleTheme} />
                                    <svg width={18} height={18} viewBox="0 0 20 20" fill="currentColor" stroke="none">
                                        <mask id="moon-mask">
                                            <rect x={0} y={0} width={20} height={20} fill="white" />
                                            <circle cx={11} cy={3} r={8} fill="black" />
                                        </mask>
                                        <circle className="sunMoon" cx={10} cy={10} r={8} mask="url(#moon-mask)" />
                                        <g>
                                            <circle className="sunRay sunRay1" cx={18} cy={10} r="1.5" />
                                            <circle className="sunRay sunRay2" cx={14} cy="16.928" r="1.5" />
                                            <circle className="sunRay sunRay3" cx={6} cy="16.928" r="1.5" />
                                            <circle className="sunRay sunRay4" cx={2} cy={10} r="1.5" />
                                            <circle className="sunRay sunRay5" cx={6} cy="3.1718" r="1.5" />
                                            <circle className="sunRay sunRay6" cx={14} cy="3.1718" r="1.5" />
                                        </g>
                                    </svg>
                                </label>
                                <p className="label">Mode</p>
                            </li>
                            {isSignedIn && (
                                <div onClick={() => sign_out()}>
                                    <Link to="/home">
                                        <li className="element">
                                            <i class="fa fa-sign-out"></i>
                                            <p className="label">Sign out</p>
                                        </li>
                                    </Link>
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;