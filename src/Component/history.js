import { useContext } from "react";
import TransactionList from "./TransactionList";
import { GlobalContext } from '../context/GlobalState';

const History = () => {
    const { transactions } = useContext(GlobalContext);
    return(
        <>
          
            <h3>History</h3>
            <ul className="list">
        {transactions.map(transaction => (<TransactionList key={transaction.id} transaction={transaction} />))}
      </ul>         
        </>
    )
}

export default History;