import "../css/main-menu.css";
import "../css/pc.css";
import "../css/profile.css";
import amazon_logo from '../img/amazon_logo.png';
import meta_logo from '../img/meta_logo.png';
import gmail_logo from '../img/gmail_logo.png';
import reddit_logo from '../img/reddit_logo.png';
import cnn_logo from '../img/cnn_logo.png';
import instagram_logo from '../img/instagram_logo.png';
import { Link } from 'react-router-dom';
import {Character} from '../components/Character.jsx';
//import {useEffect, useState} from 'react';

// <div className='profile-container left-aligned'>M
//     <img className='profile-picture' src={}></img>
//     <h1>Nickname</h1>
//     <div className='stats-contaier'>
//         <h2>Points - 2</h2>
//     </div>
// </div>


function MainMenu(){
    return (
    <div>
        <div className='container'>
            <Character />
            <div className='desktop right-aligned'>
                <div className='pc-content'>
                    <div className='icon-grid'>
                    <Link to="/amazon">
                        <img className='icon' src={amazon_logo} alt='Amazon logo'></img>
                    </Link>
                        <div><img className='icon' src={meta_logo} alt='Meta logo'></img></div>
                        <div><img className='icon' src={gmail_logo} alt='Gmail logo'></img></div>
                        <div><img className='icon' src={reddit_logo} alt='Reddit logo'></img></div>
                        <div><img className='icon' src={instagram_logo} alt='Instagram logo'></img></div>
                        <div><img className='icon' src={cnn_logo} alt='CNN logo'></img></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default MainMenu;