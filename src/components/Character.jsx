import React from "react";

class Character extends  React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.lives = props.lives;
        this.points = props.points;
        this.img = props.img;
        this.profileId = props.profileId;
    }

}