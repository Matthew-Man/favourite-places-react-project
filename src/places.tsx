import React from "react";
import ReactDOM from 'react-dom';
import "./index.css"

interface placesEntries {
    title: string,
    placeName: string,
    countryName: string,
    image: string,
    mapLink: string,
    description: string,
};

function Place(entry: placesEntries) {
    const { title, placeName, countryName, image, mapLink, description } = entry;
    const altText = `Image of ${title}`;

    return (
        <div className="place-card">
            <div className="location-image" style={{textAlign: "center"}}>
                <img src={image} alt={altText} style={{width: "400px", height: "250px", objectFit: "cover"}}/>
            </div>
            <div className="card-content">
                <h2>{title}</h2>
                <h3>{placeName}, {countryName} (<a href={mapLink}>Map Link</a>)</h3>
                <p>{description}</p>                
            </div>
        </div>
    );
};


function PlacesCompiled() {
    return (
        <div className="outer-wrapper">
            <Place
                title="White Caps of Europe"
                placeName="The Alps"
                countryName="Switzerland"
                image="https://images.pexels.com/photos/4275883/pexels-photo-4275883.jpeg?cs=srgb&dl=pexels-mateusz-sa%C5%82aciak-4275883.jpg&fm=jpg"
                mapLink="https://www.google.com/maps/place/Alps/@45.8300523,6.1823597,6z/data=!3m1!4b1!4m5!3m4!1s0x4789459fb534be51:0x38c7fdcd674c57d!8m2!3d46.8876191!4d9.6569996"
                description="The great mountain range of Europe, filled with majestic peaks, immense waterfalls, and amphitheatre-like cirques."
            />
            <Place
                title="The Royal Park of London"
                placeName="Richmond Park"
                countryName="United Kingdom"
                image="https://images.pexels.com/photos/2877854/pexels-photo-2877854.jpeg?cs=srgb&dl=pexels-marek-mucha-2877854.jpg&fm=jpg"
                mapLink="https://www.google.com/maps/place/Richmond+Park/@51.4421296,-0.2856433,13.86z/data=!4m5!3m4!1s0x48760ea56197d1fd:0x138cbe1a5a3a048d!8m2!3d51.441185!4d-0.274532"
                description="A royal deer park and public open space, will plenty of open space for leisurely walks or cycles."
            />
        </div>
    );
};


export default PlacesCompiled;