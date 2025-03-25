import { NavLink } from 'react-router-dom'
import mainLogo from '../../assets/logo_argentBank.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { isUserLogged, getFirstName } from "../../app/selectors";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import './header.css'


export default function Header() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userLogged = useSelector(isUserLogged)
    const firstName = useSelector(getFirstName)


    const onSignOut = () => {
        dispatch({ type: 'SET_TOKEN', payload: '' })
        dispatch({ type: 'SET_ISLOGGED', payload: false })
        dispatch({ type: 'SET_FIRSTNAME', payload: "" })
        dispatch({ type: 'SET_LASTNAME', payload: "" })
        dispatch({ type: 'SET_EMAIL', payload: "" })

        if (localStorage.token) {
            localStorage.removeItem("token")
        }
        navigate("/")
    }

    return (
        <header className="header">

            <nav className='mainNav'>

                <NavLink to="/" className='homeLink'>
                    <img src={mainLogo} alt="main logo" className='mainLogo' />
                </NavLink>

                <div className='navLinkWrapper'>
                    {
                        !userLogged &&
                        <NavLink to="/sign-in" className='navLink'>
                            <FontAwesomeIcon icon={faCircleUser} className='userIcon-home' />
                            Sign In
                        </NavLink>
                    }
                    {
                        userLogged &&
                        <div className='loggedInNavLinkWrapper'>
                            <NavLink to="/user-page" className='navLink'>
                                <FontAwesomeIcon icon={faCircleUser} className='userIcon-home' />
                                {firstName}
                            </NavLink>

                            {/* <NavLink to="/" className='navLink'>
                                <FontAwesomeIcon onClick={handleSignOut} icon={faRightFromBracket} className='signOutIcon' />
                                Sign Out
                            </NavLink> */}

                            <div onClick={onSignOut} className='navLink'>
                                <FontAwesomeIcon icon={faRightFromBracket} className='signOutIcon' />
                                Sign Out
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </header>
    )
}
