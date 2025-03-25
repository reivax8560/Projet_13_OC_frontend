import './signIn.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getToken from '../../api/auth';


export default function SignIn() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [signinError, setSigninError] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        const email = e.currentTarget.email.value
        const password = e.currentTarget.password.value
        const credentials = { email, password }
        const rememberMe = e.currentTarget.rememberMe.checked

        getToken(credentials)
            .then((response) => {
                if (response.message) {     ////////////////////// GERER LES ERREURS 400 ET 500
                    dispatch({ type: 'SET_ISLOGGED', payload: false })
                    setSigninError(true)
                }
                else {
                    dispatch({ type: 'SET_TOKEN', payload: response })
                    dispatch({ type: 'SET_ISLOGGED', payload: true })
                    if (rememberMe) {
                        localStorage.setItem("token", response)
                    }
                    navigate("/user-page")
                }
            })
    }


    return (

        <div className='signInPage'>
            <Header />

            <main className='signInMainContent'>

                <section className="formWrapper">

                    <div className='formTitle'>
                        <FontAwesomeIcon icon={faCircleUser} className='userIcon-signIn' />
                        <h1>Sign In</h1>
                    </div>

                    <form onSubmit={onSubmit} className="formContent">
                        <div className='inputWrapper-signIn'>
                            <label htmlFor="email">email</label>
                            <input
                                type="text"
                                name="email"
                                id='email'
                            />
                        </div>
                        <div className='inputWrapper-signIn'>
                            <label htmlFor="password">Password</label>
                            <input
                                type="text"
                                name="password"
                                id='password'
                            />
                        </div>
                        <div className='checkboxWrapper'>
                            <input
                                type="checkbox"
                                id='rememberMe'
                                name="rememberMe"
                            />
                            <label htmlFor='rememberMe'>Remember me</label>
                        </div>
                        <button type="submit" className="signInButton">Sign In</button>
                        {signinError &&
                            <span className='signinError'>
                                Invalid credentials, please try again !
                            </span>
                        }
                    </form>

                </section>
            </main>

            <Footer />
        </div>
    )
}
