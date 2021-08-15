
// https://developers.giphy.com/docs/api/endpoint#search   (Search Endpoint)
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=4LDqeSKvOSR9fbdAApgvYueCDkye3ed6`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    
    return gifs;
}

// La función es async, por lo tanto regresa una promesa con la colección de mis imágenes