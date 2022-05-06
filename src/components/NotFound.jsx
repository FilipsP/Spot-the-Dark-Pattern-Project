import {Link, useLocation } from "react-router-dom";


const NotFound = () => {

    const location = useLocation();
    console.log(location.pathname);

    return(
        <div>
            <div className = "Not-Found-Page">
                <h1>Path: {location.pathname} </h1>
                <h1>404 Not Found</h1>
                <Link to="/">
                    <button className= "start-game-btn">Back</button>
                </Link>
            </div>
        </div>
    )
}



export default NotFound
