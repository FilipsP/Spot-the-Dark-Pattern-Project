import {useEffect} from "react";
import "../../css/start-page.css"


const DarkPatternTutorial = (props) => {

    useEffect(()=>{
        console.log(props.path)
    },[props.path])

    return(
        <div className="video-container">
            <i onClick={()=>props.setShowVideo(false)} className="bi bi-x close-video">
            </i>
            <iframe
                className="video"
                width="750"
                height="500"
                src="https://drive.google.com/file/d/1k3unMROSILZwQFtYIcAzAdeSP8y63mFw/view?usp=sharing"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
            />
            {" "}
        </div>
    )
}

export default DarkPatternTutorial