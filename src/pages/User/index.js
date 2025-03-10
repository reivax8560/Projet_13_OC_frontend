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
        if (!userLogged) {
            getUserDatas(userToken)
                .then((userDatas) => {
                    if (userDatas.status === 200) {
                        dispatch({ type: 'SET_ISLOGGED', payload: true })
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
        const newFirstName = e.currentTarget.firstName.value;
        const newLastName = e.currentTarget.lastName.value;

        updateName(userToken, newFirstName, newLastName)
            .then((response) => {
                console.log(response)
                if (response.status !== 200) {
                    setIsEditOnError(true)
                    setEditErrorMessage(response.message)
                }
            })
        dispatch({ type: 'SET_FIRSTNAME', payload: newFirstName })
        dispatch({ type: 'SET_LASTNAME', payload: newLastName })

        // if (newFirstName !== firstName && newFirstName !== "") {
        //     dispatch({ type: 'SET_FIRSTNAME', payload: newFirstName })
        // }
        // if (newLastName !== lastName && newLastName !== "") {
        //     dispatch({ type: 'SET_LASTNAME', payload: newLastName })
        // }
        // // console.log(firstName)
        // updateName(userToken, firstName, lastName)  //////////////////////// A REVOIR
        //     .then((response) => {
        //         console.log(response)
        //         if (response.status !== 200) {
        //             setIsEditOnError(true)
        //             setEditErrorMessage(response.message)
        //         }
        //     })
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
