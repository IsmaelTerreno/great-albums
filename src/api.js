import fetch from "isomorphic-fetch";

export function fetchAlbumImagesApi() {
    return fetch(`https://jsonplaceholder.typicode.com/photos`)
        .then(response => response.json())
}
