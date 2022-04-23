import { Route, Routes } from 'react-router-dom';
import './App.css';
import StartPage from './pages/startPage';
import LoginRegister from './pages/login-register';
import Settings from './components/settings';
import {useState} from 'react';


function App() {

    const [openSettings, setSettings] = useState(false);


    return (
        <div className="App">
            <div onClick={()=>{setSettings(true)}}><i className="bi bi-gear settings-btn"></i></div>
            {openSettings && <Settings closeSettings={setSettings} />}
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="login-register" element={<LoginRegister/>} />
            </Routes>
            
        </div>
    );
}

export default App;
