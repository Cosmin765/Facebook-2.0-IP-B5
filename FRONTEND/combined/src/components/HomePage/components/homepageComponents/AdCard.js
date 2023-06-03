import React, { useEffect } from 'react';
import { useState } from 'react';
import ShowAccount from './ShowAccount';
import '../../styles/homepageStyles/card.css';
import { getImage } from '../../../../util';

export default function AdCard({ad}) {
    const [base64, setBase64] = useState('');

    useEffect(() => {

        if(ad.postImages.length === 0 || !ad.postImages[0].imageLink) {
            return;
        }
        else{
           
        getImage(ad.postImages[0].imageLink).then(source => {
            setBase64('data:image/png;base64,' + source)
        });}
    }, []);

    const clickAd = () => {
        window.open(ad.link, "_blank");
    }
    
    return (
        <div className='feed_card' onClick={clickAd}>
            <div className='feed_topCard'>
                {/* <ShowAccount account={ad.account}/> */}
                <div className='feed_options'>
                {/* <p>dsfsdf</p> */}
                </div>
            </div>

            <div className='feed_postBody'>
                <p style={{width: '100%', textAlign: 'right', color: 'gray', fontSize: '15px'}}>Sponsored</p>
                <h2>{ad.title}</h2>
                <div>
                    {/* {ad.text.length > 0 && */}
                    <p>{ad.content}</p>
                    {/* } */}
                </div>
                {base64 ? 
                <div className='feed_media'>
                    <img src={base64} />
                    {/* {ad.picture != undefined &&
                    <img src={ad.picture} alt={ad.account.name}/>
                    } */}
                </div>
                : null }
            </div>
        </div>      
    );
}