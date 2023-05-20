import React from 'react';
import { useState } from 'react';
import ShowAccount from './ShowAccount';
import '../../styles/homepageStyles/card.css';

export default function AdCard({ad}) {
  return (
        <div className='feed_card'>
            <div className='feed_topCard'>
                <ShowAccount account={ad.account}/>
                <div className='feed_options'>
                {/* <p>dsfsdf</p> */}
                </div>
            </div>

            <div className='feed_postBody'>
                <div>
                    {ad.text.length > 0 &&
                    <p>{ad.text}</p>
                    }
                </div>
                
                <div className='feed_media'>
                    {ad.picture != undefined &&
                    <img src={ad.picture} alt={ad.account.name}/>
                    }
                </div>
                
            </div>
        </div>      
    );
}