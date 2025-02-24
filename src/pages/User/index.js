import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AccountCard from '../../components/AccountCard'
import { useSelector, useDispatch } from "react-redux";
import { getUserToken, isUserLogged } from "../../app/selectors";
import getUserDatas from '../../api/api';
import './user.css'


export default function User() {

    const dispatch = useDispatch()

    const userToken = useSelector(getUserToken)
    getUserDatas(userToken)
        .then((userDatas) => {
            dispatch({ type: 'UPDATE_FIRSTNAME', payload: userDatas?.body?.firstName })
            dispatch({ type: 'UPDATE_LASTNAME', payload: userDatas?.body?.lastName })
            dispatch({ type: 'UPDATE_EMAIL', payload: userDatas?.body?.email })
        })
    // const { firstName, lastName } = useSelector((state) => state.user);

    const handleSubmit = (evt) => {
        // evt.preventDefault();
        // const firstName = evt.currentTarget.firstName.value;
        // const lastName = evt.currentTarget.lastName.value;
        // dispatch(userSlice.actions.updateName(firstName, lastName));
    };



    return (

        <div className='userPage'>

            <Header />

            <main className='userMainContent'>

                <div className='userNameWrapper'>

                    {/* <h1>Welcome back<br />{firstName + lastName}!</h1> */}
                    <button className="greenButton editButton" >Edit Name</button>


                    <form onSubmit={handleSubmit} className='editNameForm'>
                        <div className='inputWrapper-user'>
                            <input type="text" name="firstName" id='editFirstName' placeholder='Tony' className='editNameInput' />
                            <input type="text" name="lastName" id='editLastName' placeholder='Jarvis' className='editNameInput' />
                        </div>
                        <div className='buttonWrapper'>
                            <button type='submit' className="greenButton editNameButton">Save</button>
                            <button className="greenButton editNameButton">Cancel</button>
                        </div>
                    </form>

                </div>

                <AccountCard />
                <AccountCard />
                <AccountCard />

            </main>

            <Footer />

        </div>
    )
}
