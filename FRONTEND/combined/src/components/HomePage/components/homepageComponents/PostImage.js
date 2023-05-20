import React from 'react';
import { useState } from 'react';
import { getImage } from '../../../../util';


export default function PostImage({imageName, alt}) {
    const [ base64, setBase64] = useState('');

    getImage(imageName).then(imageSource => setBase64('data:image/png;base64,' + imageSource));

    return (<div>
        <img src={base64} alt={alt} />
    </div>);
}