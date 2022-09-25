import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import Groups from './pages/Groups';
import Expenses from './pages/Expenses';
import SettleBill from './pages/SettleBill';
import History from './pages/History';
import AddUserToGroup from './pages/AddUserToGroup';

function App() {
  return (
    <div className="App">
      <ToastContainer 
      position="top-right"
      autoClose={3000}
      />
      <BrowserRouter>      
        <Routes>
          <Route element={<Home />} path="/*" exact />                    
          <Route element={<LoginPage />} path="/login" />                    
          <Route element={<RegisterPage/>} path="/register"/>                                                                                                                                
          <Route element={<Dashboard/>} path="/dashboard"/>                                                                                                                                
          <Route element={<Groups/>} path="/groups"/>                                                                                                                                
          <Route element={<AddUserToGroup/>} path="/adduser"/>                                                                                                                                
          <Route element={<Expenses/>} path="/expenses"/>                                                                                                                                
          <Route element={<History/>} path="/history"/>                                                                                                                                
          <Route element={<SettleBill/>} path="/settle"/>                                                                                                                                
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
