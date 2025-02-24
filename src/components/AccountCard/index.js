import { NavLink } from 'react-router-dom'
import './accountCard.css'

export default function AccountCard() {

    return (

        <section className='accountWrapper'>

            <div className='accountContent'>
                <h3 className='accountTitle'>Argent Bank Checking (x8349)</h3>
                <p className='accountAmount'>$2,082.79</p>
                <p className='accountDescription'>Available Balance</p>
            </div>

            {/* <div className='transactionButtonWrapper'> */}
            <NavLink to="/transactions" >
                <button className='greenButton transactionButton'>
                    View transactions
                </button>
            </NavLink>

            {/* </div> */}

        </section>

    )
}
