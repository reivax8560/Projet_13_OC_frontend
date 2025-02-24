import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FeatureCard from '../../components/FeatureCard'
import banner from '../../assets/img_bank_tree.jpeg'
import chatIcon from '../../assets/icon_chat.png'
import moneyIcon from '../../assets/icon_money.png'
import securityIcon from '../../assets/icon_security.png'
import { promiseChat_title, promiseChat_text, promiseMoney_title, promiseMoney_text, promiseSecurity_title, promiseSecurity_text } from '../../utils/text'
import './home.css'


export default function Home() {

    return (
        <div className="home">

            <Header />

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
