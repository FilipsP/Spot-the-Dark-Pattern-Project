import {Route, Routes, useLocation} from "react-router-dom";
import StartPage from "../../pages/StartPage";
import NotFound from "../NotFound";
import Game from "../../pages/Game";

const AnimatedRoutes = () => {
    const location = useLocation()
    return(
        <Routes location={location} key = {location.pathname}>
            <Route exact path = "/" element = {<StartPage />} />
            <Route path="*" element={<NotFound />}/>
            <Route path="/game" element={<Game />} />
        </Routes>
    )
}
export default AnimatedRoutes