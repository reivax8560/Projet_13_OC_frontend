import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faPen } from "@fortawesome/free-solid-svg-icons";
import './transactionRaw.css'

export default function TransactionRaw({ date, description, amount, balance }) {

    return (

        <tr className='transactionRaw'>

            <td className='transactionCell iconCell'>
                <FontAwesomeIcon icon={faChevronUp} className="arrow" />
            </td>

            <td className='transactionCell dateCell'>
                <p>{date}</p>
                <span>Transaction Type: Electronic</span>
                <span>Category: Food <FontAwesomeIcon icon={faPen} /></span>
                <span>Notes: <FontAwesomeIcon icon={faPen} /></span>
            </td>

            <td className='transactionCell descriptionCell'>{description}</td>

            <td className='transactionCell amountCell'>{amount}</td>

            <td className='transactionCell balanceCell'>{balance}</td>

        </tr>

    )
}
