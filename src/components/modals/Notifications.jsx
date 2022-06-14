import React from "react";

const Notifications = (props) => {
  return(
      <div className="form-container modal">
          {props.notifications.map(element =>
              <div style={{border:"thick",borderStyle:"dashed"}} key={element.id}>
                  <h1>{element.name}</h1>
                  <p>{element.description}</p>
              </div>)}
      </div>
  )
}

export default Notifications