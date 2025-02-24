import { NavLink } from 'react-router-dom'
import mainLogo from '../../assets/logo_argentBank.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import './header.css'


export default function Header() {

    return (
        <header className="header">

            <nav className='mainNav'>
                <NavLink to="/" className='homeLink'>
                    <img src={mainLogo} alt="main logo" className='mainLogo' />
                </NavLink>

                <div className='navLinkWrapper'>
                    <NavLink to="/sign-in" className='navLink'>
                        <FontAwesomeIcon icon={faCircleUser} className='userIcon-home' />
                        Sign In
                    </NavLink>

                    <NavLink to="/user-page" className='navLink'>
                        <FontAwesomeIcon icon={faCircleUser} className='userIcon-home' />
                        Tony
                    </NavLink>

                    <NavLink to="/" className='navLink'>
                        <FontAwesomeIcon icon={faRightFromBracket} className='signOutIcon' />
                        Sign Out
                    </NavLink>
                </div>
            </nav>

        </header>
    )
}
