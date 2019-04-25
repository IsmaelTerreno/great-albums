import React from 'react'
import './Albums.scss';
import ImageItem from "./ImageItem";

const albumStyles = ["Album--album-1", "Album--album-2", "Album--album-3"];

const getAlbumStyle = (index) => {
    return (albumStyles[index]) ? albumStyles[index] : "";
};

const compareById = ( a, b ) => {
    if ( a.id > b.id ){
        return -1;
    }
    if ( a.id < b.id ){
        return 1;
    }
    return 0;
};

const groupByAlbum = (items) => {
    const albumGroup = items.sort(compareById).reduce(
        (entryMap, e) =>
            entryMap.set(
                e.albumId,
                [...entryMap.get(e.albumId)||[], e]
            ),
        new Map()
    );
    const mapIter = albumGroup.keys();
    return [
        albumGroup.get(mapIter.next().value),
        albumGroup.get(mapIter.next().value),
        albumGroup.get(mapIter.next().value)
    ];
};

const Albums = ({items}) => {
   return (
       <section className="Albums-section">
           {
               items && items.length > 1 && groupByAlbum(items).map((item, indexAlbum) => (
                   <div key={"album-"+item.id+indexAlbum} className={"Album "+getAlbumStyle(indexAlbum)}>
                       <h4 className="Photos__title">Album ID {item[0].albumId}</h4>
                       <div className="Albums-section__photos">
                           {
                               item.slice(0,2).map((photo) => {
                                   return (
                                       <ImageItem
                                           key={"image-item-"+photo.id}
                                           title={"ID "+photo.id+": "+photo.title}
                                           url={photo.thumbnailUrl}
                                       />
                                   )
                               })
                           }
                       </div>

                   </div>
               ))
           }
       </section>
   );
};

export default Albums;
