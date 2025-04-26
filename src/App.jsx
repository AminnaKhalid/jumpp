import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from "./pages/components/Navbar"
import Dashboard from './pages/components/Dashboard';
import Aboutus from "./pages/Aboutus/Aboutus"
import Privacypolicy from './pages/Privacypolicy/Privacypolicy';
import Terms from './pages/TermsCon/Terms';
import Notification from './pages/Notifications/Notification';
import Transaction from "./pages/Transaction/Transaction"
import TransactionDetail from "./pages/Transaction/TransactionDetail"
import Reviews from './pages/Reviews/Reviews';
import Category from './pages/Categories/Category';
import Users from './pages/Users/Users';    
import Contractors from "./pages/Contractors/Contractor"
import Details from './pages/Contractors/Details';
import Login from './pages/components/Login';
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/AllUsers" element={<Navbar />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/privacypolicy" element={<Privacypolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/transaction/detail" element={<TransactionDetail />} />
        <Route path="/review" element={<Reviews />} />
        <Route path="/category" element={<Category />} />
        <Route path="/users" element={<Users />} />
        <Route path="/Contractors" element={<Contractors />} />
        <Route path="/Contractors/Details" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App
