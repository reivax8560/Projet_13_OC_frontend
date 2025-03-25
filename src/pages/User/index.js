import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { useState, useEffect } from 'react';
import AccountCard from '../../components/AccountCard'
import { useSelector, useDispatch } from "react-redux";
import { getUserToken, getFirstName, getLastName, isUserLogged } from "../../app/selectors";
import { getUserDatas, updateName } from '../../api/api';
import './user.css'


export default function User() {

    const dispatch = useDispatch()

    const [isPageOnError, setIsPageOnError] = useState(false)
    const [pageErrorMessage, setPageErrorMessage] = useState("")
    const [isEditEnabled, setIsEditEnable] = useState(false)
    const [isEditOnError, setIsEditOnError] = useState(false)
    const [editErrorMessage, setEditErrorMessage] = useState("")

    const userToken = useSelector(getUserToken)
    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)
    const userLogged = useSelector(isUserLogged)

    useEffect(() => {
        if (userLogged) {
            getUserDatas(userToken)
                .then((userDatas) => {
                    if (userDatas.status === 200) {
                        dispatch({ type: 'SET_FIRSTNAME', payload: userDatas?.body?.firstName })
                        dispatch({ type: 'SET_LASTNAME', payload: userDatas?.body?.lastName })
                        dispatch({ type: 'SET_EMAIL', payload: userDatas?.body?.email })
                    }
                    else {
                        setIsPageOnError(true)
                        setPageErrorMessage(userDatas.message)
                    }
                })
        }
    }, [dispatch, userLogged, userToken])



    const handleSubmit = (e) => {
        e.preventDefault();

        const dataToSend = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
        };

        updateName(userToken, dataToSend)
            .then((response) => {
                console.log(response)
                if (response.status !== 200) {
                    setIsEditOnError(true)
                    setEditErrorMessage(response.message)
                }
            })
        dispatch({ type: 'SET_FIRSTNAME', payload: e.target.firstName.value })
        dispatch({ type: 'SET_LASTNAME', payload: e.target.lastName.value })

        // if (newFirstName !== firstName && newFirstName !== "") {
        //     dispatch({ type: 'SET_FIRSTNAME', payload: newFirstName })
        // }
        // if (newLastName !== lastName && newLastName !== "") {
        //     dispatch({ type: 'SET_LASTNAME', payload: newLastName })
        // }

    };


    return (

        <div className='userPage'>

            <Header />

            <main className='userMainContent'>

                <div className='userNameWrapper'>

                    <h1>
                        Welcome back<br />
                        {!isEditEnabled && firstName + " " + lastName + " !"}
                    </h1>

                    {isPageOnError &&
                        <span className='userPageError'>
                            {pageErrorMessage}
                        </span>
                    }

                    {isEditEnabled &&
                        <form onSubmit={handleSubmit} className='editNameForm'>
                            {isEditOnError &&
                                <span className='editError'>
                                    {editErrorMessage}
                                </span>
                            }

                            <div className='inputWrapper-user'>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder={firstName}
                                    className='editNameInput'
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder={lastName}
                                    className='editNameInput'
                                />
                            </div>
                            <div className='buttonWrapper'>
                                <button type='submit' className="greenButton editNameButton">Save</button>
                                <button onClick={() => setIsEditEnable(false)} className="greenButton editNameButton">Cancel</button>
                            </div>
                        </form>
                    }
                    {!isEditEnabled &&
                        <button onClick={() => setIsEditEnable(true)} className="greenButton editButton" >Edit Name</button>
                    }
                </div>

                <AccountCard />
                <AccountCard />
                <AccountCard />

            </main>

            <Footer />

        </div>
    )
}
