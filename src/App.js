import './App.css';
import Header from './Component/Header';
import Balance from './Component/balance';
import Expence from './Component/expense';
import History from './Component/history';
import Transaction from './Component/transaction';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
   <Header/>
   <div className="container">
   <Balance/>
   <Expence/>
   <History/>
   <Transaction/>
   </div>
   </GlobalProvider>
  );
}

export default App;
