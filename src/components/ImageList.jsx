import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = (props) => {
    //console.log("here are my props", props.images);
    const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image}/>;

       // before refactor to have imagecard component
        //return <alt={image.description} src={image.urls.regular}/>
        //key must be in the root level...if had div could do 
            // return (
            // <div key={image.id}>
            //     <img src={image.urls.regular}
            // </div>
            // )

            //es6 destructured version
            //const images = props.images.map(({description, id, urls })=>{
               // return <img key={id} atl ={description} src={urls.regular}/>
    });
    return (
        <div className="image-list">{images}</div>
        
    );
};

export default ImageList;