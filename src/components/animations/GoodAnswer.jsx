

import {useEffect} from "react";


const GoodAnswer = () => {
    useEffect(()=>{
        console.log("playing")
    },[])

    return(
        <i className="bi bi-hand-thumbs-up icon-btn thumb-btn"></i>
    )
}
export default GoodAnswer