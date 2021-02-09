import ReactDOM from 'react-dom';


interface placesEntries {
    title: string,
    placeName: string,
    countryName: string,
    image: string,
    mapLink: string,
    description: string,
}

function Place(entry: placesEntries) {
    const { title, placeName, countryName, image, mapLink, description } = entry;
    const altText = `Image of ${title}`;

    return (
        <div style={{width: "400px", height: "250px", objectFit: "cover"}}>
            <img src={image} alt={altText} />
        </div>
    )
}



const placeOne = {
    title: "White Caps",
    placeName: "The Alps",
    countryName: "Switzerland", 
    image: "",
    mapLink: "https://www.google.com/maps/place/Alps/@45.8300523,6.1823597,6z/data=!3m1!4b1!4m5!3m4!1s0x4789459fb534be51:0x38c7fdcd674c57d!8m2!3d46.8876191!4d9.6569996",
    description: "The great mountain range of Europe, filled with majestic peaks, immense waterfalls, and amphitheatre-like cirques."
}