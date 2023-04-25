import React from "react";
import "./Profile.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab, faCheckSquare, faCoffee)
const Profile = () => {
    return(
        <div className='container'>
            <div className="left">koobecaf.</div>
            <div className="right">
                <div className="search-bar">
                    <form className="search">
                        <input type="text" placeholder="Search.." name="search"></input>
                        <button type="submit"><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /></button>                    </form>
                </div>
                <div className="content">.</div>
            </div>
        </div>
    )
}

export default Profile