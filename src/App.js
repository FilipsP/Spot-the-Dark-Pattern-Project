import './App.css';
import { Route,Routes} from 'react-router-dom';
import StartPage from './pages/startPage';
import Testing from './components/test/Testing';
import NotFound from "./components/NotFound";
import Game from "./pages/Game";

function App() {


    return (
        <div className="App">
            <Routes>
                <Route exact path = "/" element = {<StartPage />} />
                <Route exact path = "/test" element = {<Testing />}/>
                <Route path="*" element={<NotFound />}/>
                <Route path="/game" element={<Game />} />
            </Routes>


        </div>
    );
}



export default App;
