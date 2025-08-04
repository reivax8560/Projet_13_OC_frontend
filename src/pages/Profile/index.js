import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AccountCard from '../../components/AccountCard'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserDatas, updateName } from '../../api/api';
import { useSelector, useDispatch } from "react-redux";
import { getUserToken, getFirstName, getLastName, isUserLogged, getEmail } from "../../app/selectors";
import { setUserDatas } from '../../features/profileSlice'
import './profile.css'


export default function User() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [isPageOnError, setIsPageOnError] = useState(false)
    const [pageErrorMessage, setPageErrorMessage] = useState("")
    const [isEditEnabled, setIsEditEnable] = useState(false)
    const [isEditOnError, setIsEditOnError] = useState(false)
    const [editErrorMessage, setEditErrorMessage] = useState("")
    const [formData, setFormData] = useState({firstName: '', lastName: ''})

    const userToken = useSelector(getUserToken)
    const firstName = useSelector(getFirstName)
    const lastName = useSelector(getLastName)
    const userLogged = useSelector(isUserLogged)
    const email = useSelector(getEmail)


    //////////////////////////////////////////////// REDIRECTION SI USER NON CONNECTÉ
    useEffect(() => {
        if (!userLogged) {
            navigate("sign-in")
        } 
    }, [userLogged, navigate])


    //////////////////////////////////////////////// RÉCUPÉRATION DATAS USER QUAND REMEMBER ME NON COCHÉ
    useEffect(() => {
        if (userLogged && email === "") {
            getUserDatas(userToken)
                .then((userDatas) => {
                    if (userDatas.status === 200) {
                        dispatch(setUserDatas({
                            firstName: userDatas?.body?.firstName, 
                            lastName: userDatas?.body?.lastName,
                            email: userDatas?.body?.email
                        }))
                    }
                    else {
                        setIsPageOnError(true)
                        setPageErrorMessage(userDatas.message)
                    }
                })
        }
    }, [dispatch, userLogged, userToken, email])


    //////////////////////////////////////////////// CHARGEMENT INITIAL DU STATE FORMDATA
    useEffect(() => {
        setFormData({firstName, lastName})
    }, [firstName, lastName])


    //////////////////////////////////////// SOUMISSION FORMULAIRE EDIT NAME
    const handleSubmit = (e) => {
        e.preventDefault();
        updateName(userToken, formData)
            .then((response) => {
                if (response.status !== 200) {
                    setIsEditOnError(true)
                    setEditErrorMessage(response.message)
                }
                setIsEditEnable(false)
            })
        dispatch(setUserDatas({
            firstName: formData.firstName, 
            lastName: formData.lastName, 
            email: email}))
    };

    
    //////////////////////////////////////// RECUP VALEUR INPUT DANS STATE
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }



    return (

        <div className='userPage'>

            <Header />

            <main className='userMainContent'>

                <div className='userNameWrapper'>

                    {/* TITRE AFFICHÉ SI EDITION DESACTIVÉE */}
                    <h1>
                        Welcome back<br />
                        {!isEditEnabled && firstName + " " + lastName + " !"}
                    </h1>

                    {/* MESSAGE SI PAGE EN ERREUR */}
                    {isPageOnError &&
                        <span className='userPageError'>
                            {pageErrorMessage}
                        </span>
                    }

                    {/* FORMULAIRE AFFICHÉ SI EDITION ACTIVE */}
                    {isEditEnabled &&
                        <div className='editNameForm'>

                            {isEditOnError &&
                                <span className='editError'>
                                    {editErrorMessage}
                                </span>
                            }

                            <div className='inputWrapper-user'>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className='editNameInput'
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className='editNameInput'
                                />
                            </div>
                            <div className='buttonWrapper'>
                                <button  onClick={handleSubmit} className="greenButton editNameButton">Save</button>
                                <button onClick={() => {setIsEditEnable(false)}} className="greenButton editNameButton">Cancel</button>
                            </div>
                        </div>
                    }
                    {/* BOUTON AFFICHÉ SI EDITION DESACTIVÉE */}
                    {!isEditEnabled &&
                        <button onClick={() => {setIsEditEnable(true)} } className="greenButton editButton" >Edit Name</button>
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
