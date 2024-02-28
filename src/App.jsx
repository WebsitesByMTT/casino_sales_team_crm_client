import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/Login/login';
import TlDashboard from './pages/TL/tl';


function App() {

  return (
    <>
      <Router>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/tlDashboard" element={<TlDashboard />} />


        </Routes>
      </Router>
    </>
  )
}

export default App
