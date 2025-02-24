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

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailOnChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordOnChange = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const credentials = { email, password };
        getToken(credentials)
            .then((response) => {
                // SI ERROR PASSER ISLOGGED A FALSE + MESSAGE ERREUR
                if (response.message) {
                    dispatch({ type: 'SET_ISLOGGED_FALSE', payload: false })
                    console.log(response.message)
                }
                // SINON STOCKER TOKEN DANS STORE
                else {
                    dispatch({ type: 'ADD_TOKEN', payload: response })
                    dispatch({ type: 'SET_ISLOGGED_TRUE', payload: true })
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
                                onChange={emailOnChange}
                                value={email}
                                type="text"
                                name="email"
                                id='email' />
                        </div>
                        <div className='inputWrapper-signIn'>
                            <label htmlFor="password">Password</label>
                            <input
                                onChange={passwordOnChange}
                                value={password}
                                type="text"
                                name="password"
                                id='password' />
                        </div>
                        <div className='checkboxWrapper'>
                            <input type="checkbox" name="remember" />
                            <label>Remember me</label>
                        </div>
                        <button type="submit" className="signInButton">Sign In</button>
                    </form>

                </section>
            </main>

            <Footer />
        </div>
    )
}
