import './App.css';
import { Route, Routes } from 'react-router-dom';
import StartPage from './pages/startPage';
import LoginRegister from './pages/login-register';
import Settings from './components/settings';
import WelcomePage from './pages/welcome';
// import MainMenu from './pages/main-menu';
// import Amazon from './pages/apps/amazon';
import {useState} from 'react';
import Testing from './components/martest/Testing';
import NotFound from "./components/NotFound";
import Index from "./pages";

//  ! Route for testing purposes 
import Meta from "./pages/apps/meta";
import Reddit from "./pages/apps/reddit";
import Gmail from "./pages/apps/gmail";
import CNN from "./pages/apps/cnn";



function App() {

    const [openSettings, setSettings] = useState(false);


    return (
        <div className="App">
        {/* "back" button */}
            <div className='back-btn-container'>
                <i className="bi bi-arrow-left-circle back-btn"></i>
                <p className='back-btn-text'>Back</p>
            </div>
        {/* "back" button */}
            <div onClick={()=>{setSettings(true)}}><i className="bi bi-gear settings-btn"></i></div>
            {openSettings && <Settings closeSettings={setSettings} />}
            <Routes>
                <Route exact path = "" element = {<StartPage />} />
                <Route exact path ="/login-register" element = {<LoginRegister />} />
                <Route exact path = "/test" element = {<Testing />}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="welcome" element={<WelcomePage/>} />
                <Route path="index" element={<Index />} />
                {/* Route for testing purposes  */}
                <Route path="meta" element={<Meta />} />
                <Route path="reddit" element={<Reddit />} />
                <Route path="gmail" element={<Gmail />} />
                <Route path="cnn" element={<CNN />} />
            </Routes>


        </div>
    );
}



export default App;
