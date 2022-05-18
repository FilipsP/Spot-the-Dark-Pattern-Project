import './App.css';
import { Route,Routes} from 'react-router-dom';
import StartPage from './pages/startPage';
import Settings from './components/settings';
import WelcomePage from './pages/welcome';
import {useState} from 'react';
import Testing from './components/test/Testing';
import NotFound from "./components/NotFound";
import Game from "./pages/game";

function App() {

    const [openSettings, setSettings] = useState(false);



    return (
        <div className="App">
            <div onClick={()=>{setSettings(true)}}><i className="bi bi-gear settings-btn"></i></div>
            {openSettings && <Settings closeSettings={setSettings} />}
            <Routes>
                <Route exact path = "/" element = {<StartPage />} />
                <Route exact path = "/test" element = {<Testing />}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="welcome" element={<WelcomePage/>} />
                <Route path="game" element={<Game />} />
            </Routes>


        </div>
    );
}



export default App;
