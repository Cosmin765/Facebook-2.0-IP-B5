import React from "react";
import '../../styles/ColorScheme.css';
import '../../styles/homepageStyles/status.css';


export default function Status(props) {
    return (
        <div className='status'>
            <div className='statusInput'>
            <input type="text" id="fname" className="input" placeholder="How do you feel today?" onClick={props.openPostPopup}/>
            </div>
        </div>
    );
}