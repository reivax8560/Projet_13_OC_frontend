import Header from '../../components/Header'
import Footer from '../../components/Footer'
import TransactionRaw from '../../components/TransactionRaw'
import './transactions.css'

export default function Transactions() {

    return (

        <div className='transactionsPage'>

            <Header />

            <main className='transactionsMainContent'>

                <div className='accountContent-transactions'>
                    <h3 className='accountTitle-transactions'>Argent Bank Checking (x8349)</h3>
                    <p className='accountAmount-transactions'>$2,082.79</p>
                    <p className='accountDescription-transactions'>Available Balance</p>
                </div>

                <table>
                    <thead>
                        <tr className='headingRaw'>
                            <th></th>
                            <th>DATE</th>
                            <th>DESCRIPTION</th>
                            <th>AMOUNT</th>
                            <th>BALANCE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <TransactionRaw date='June 20th, 2020' description='Golden Sun Bakery' amount='$5.00' balance='$2082.79' />
                        <TransactionRaw date='June 20th, 2020' description='Golden Sun Bakery' amount='$10.00' balance='$2087.79' />
                        <TransactionRaw date='June 20th, 2020' description='Golden Sun Bakery' amount='$20.00' balance='$2097.79' />
                        <TransactionRaw date='June 20th, 2020' description='Golden Sun Bakery' amount='$30.00' balance='$2117.79' />
                        <TransactionRaw date='June 20th, 2020' description='Golden Sun Bakery' amount='$40.00' balance='$2147.79' />
                        <TransactionRaw date='June 20th, 2020' description='Golden Sun Bakery' amount='$50.00' balance='$2187.79' />
                    </tbody>
                </table>

            </main>

            <Footer />

        </div>

    )
}
