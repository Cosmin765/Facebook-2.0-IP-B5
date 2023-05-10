import React from "react";
import ShowAccount from "./ShowAccount";
import '../../styles/homepageStyles/onlineFriends.css';
import arrow from '../../icons/arrow.svg';
import { useState, useEffect } from 'react';

function useWindowSize() {
    const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
    useEffect(() => {
        const handleResize = () => {
            setSize([window.innerHeight, window.innerWidth]);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return (size);
}

export default function OnlineFriends({friends, openAcount}) {
    const [show, setShow] = useState(true);

    const [height, width] = useWindowSize();

    const burgerToggle = () => {
        setShow(!show);
        console.log(document.body.getElementsByClassName("test"));
        
        alert();
    }

    const showFriends = friends.map((friend) => {
        return (
            <div className='firends'>
                <ShowAccount account={friend.account}/>
            </div>
        );
    });

    return (
        <>
        <div className='onlineFriends'>
            <div className='burger' onClick={burgerToggle}>
                <img src={arrow} alt='menu'/>
            </div>
                <div className={"test" || (width < 1000 && 'panel')}>
                    {show && (
                    <>
                        <div className="top">
                            <p>Online friends</p>
                        </div>
                        <div className="commentsList friendsList">
                            {showFriends}
                        </div>
                    </>
                )}
                </div>
            </div>


        {/* <div className='card showComments' style={{boxShadow: 'none', width: '60%'}}>
            <div>
                <p>Online friends</p>
            </div>
            <div className="commentsList friendsList">
                {showFriends}
            </div>
        </div> */}
        </>
    );
}