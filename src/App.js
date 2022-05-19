import './App.css';
import { Route,Routes} from 'react-router-dom';
import StartPage from './pages/startPage';
import WelcomePage from './pages/welcome';
import Testing from './components/test/Testing';
import NotFound from "./components/NotFound";
import Game from "./pages/game";

function App() {


    return (
        <div className="App">
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
