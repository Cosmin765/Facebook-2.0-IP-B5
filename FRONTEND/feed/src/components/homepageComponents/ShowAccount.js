import React from "react";
import '../../styles/ShowAccount.css';

export default function ShowAccount({account:{name, picture, uploadDate}}) {

    return (
        <div className='account'>
            <img src={picture} alt={name} />
            <div className='accountDetails'>
                <p className='name'>{name}</p>
                {uploadDate && <p className='date'>{uploadDate}</p>}
            </div>
        </div>
    );
}