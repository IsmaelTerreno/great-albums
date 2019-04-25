import React from 'react';
import './ImageItem.scss';

const ImageItem = ({title, url}) => (
    <div title={title} className="ImageItem">
        <img src={url} alt={title}/>
    </div>
);

export default ImageItem;
