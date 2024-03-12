import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/login';
import TlDashboard from './pages/TL/tl';
import FirstDepositeEntry from './pages/Agent/FirstDepositeEntry/firstDepositeEntry';
import FreeToPlay from './pages/Agent/FreeToPlay/freeToPlay';
import FreshMessage from './pages/Agent/FreshMessages/freshMessage';
import AccountRecords from './pages/Manager/AccountRecords/accountRecords';
import BalanceSheet from './pages/Manager/BalanceSheet/balanceSheet';
import CoinSheet from './pages/Manager/CoinSheet/coinSheet';


function App() {

  return (
    <>
      <Router>
        
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/tlDashboard" element={<TlDashboard />} />

          <Route exact path="/firstDepositeEntry" element={<FirstDepositeEntry />} />
          <Route exact path="/freshMessage" element={<FreshMessage />} />
          <Route exact path="/freeToPlay" element={<FreeToPlay />} />

          <Route exact path="/acountRecords" element={<AccountRecords />} />
          <Route exact path="/balanceSheet" element={<BalanceSheet />} />
          <Route exact path="/coinSheet" element={<CoinSheet />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
