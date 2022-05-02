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

// eslint-disable-next-line
/*let a = document.querySelector("button");
a.addEventListener("click", handleClick);
let b = document.getElementById("Back-Button")
b.addEventListener("touchcancel", handleClickCancel);
let c = document.getElementById("Back-Button");
c.addEventListener("touchend", handleClickEnd);
function handleClick() {
    document.getElementById("404").innerHTML = "Sorry, there is no way back";
}
function handleClickCancel() {
    document.getElementById("404").innerHTML = "...";
}
function handleClickEnd() {
    document.getElementById("404").innerHTML = "Sorry, there is no way back...";
}*/

export default NotFound
