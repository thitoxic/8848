
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import ClientList from './components/clientList';
import Register from './components/register';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
        <Route path="/" element={<ClientList />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
