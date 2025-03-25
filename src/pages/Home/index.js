import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FeatureCard from '../../components/FeatureCard'
import banner from '../../assets/img_bank_tree.jpeg'
import chatIcon from '../../assets/icon_chat.png'
import moneyIcon from '../../assets/icon_money.png'
import securityIcon from '../../assets/icon_security.png'
import { promiseChat_title, promiseChat_text, promiseMoney_title, promiseMoney_text, promiseSecurity_title, promiseSecurity_text } from '../../utils/text'
import './home.css'
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { getUserDatas } from '../../api/api';



export default function Home() {

    const dispatch = useDispatch()

    const [isHomePageOnError, setIsHomePageOnError] = useState(false)
    const [homePageErrorMessage, setHomePageErrorMessage] = useState("")


    useEffect(() => {
        if (localStorage.token) {
            const userToken = localStorage.getItem("token")
            getUserDatas(userToken)
                .then((userDatas) => {
                    if (userDatas.status === 200) {
                        dispatch({ type: 'SET_ISLOGGED', payload: true })
                        dispatch({ type: 'SET_TOKEN', payload: userToken })
                        dispatch({ type: 'SET_FIRSTNAME', payload: userDatas?.body?.firstName })
                        dispatch({ type: 'SET_LASTNAME', payload: userDatas?.body?.lastName })
                        dispatch({ type: 'SET_EMAIL', payload: userDatas?.body?.email })
                    }
                    else {
                        setIsHomePageOnError(true)
                        setHomePageErrorMessage(userDatas.message)
                    }
                })
        }
    }, [dispatch])


    return (
        <div className="home">

            <Header />

            {isHomePageOnError &&
                <span className='homePageError'>
                    {homePageErrorMessage}
                </span>
            }

            <main className='homeMainContent'>
                <section className='banner'>
                    <img src={banner} alt="plant" className='bannerImg' />
                    <div className='bannerText'>
                        <p className='bannerText-bold'>No fees.</p>
                        <p className='bannerText-bold'>No minimum deposit.</p>
                        <p className='bannerText-bold'>High interest rates.</p>
                        <p className='bannerText-light'>Open a savings account with <br />Argent Bank today!</p>
                    </div>
                </section>

                <section className='features'>
                    <FeatureCard icon={chatIcon} title={promiseChat_title} text={promiseChat_text} />
                    <FeatureCard icon={moneyIcon} title={promiseMoney_title} text={promiseMoney_text} />
                    <FeatureCard icon={securityIcon} title={promiseSecurity_title} text={promiseSecurity_text} />
                </section>
            </main>

            <Footer />

        </div>
    )
}
