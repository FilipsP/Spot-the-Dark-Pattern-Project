import React from "react";
import "../../css/notifications.css";

const Notifications = (props) => {
    return(
        <div className="notification-container modal">
            {props.notifications.map(element =>
                <div className='notification-frame' key={element.id}>
                    <h1 className='notification-heading'>{element.name}</h1>
                    <p>{element.description}</p>
                </div>)}
        </div>
    )
}

export default Notifications