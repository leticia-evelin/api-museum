'use strict'

 export const colecoes = async () => {
    // let token = "d5e35518b330cab7beb621b5c68cad84";
    const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.videos.getList&access_token=d5e35518b330cab7beb621b5c68cad84&page=1&per_page=10`
    const response = await fetch(url)
    const data = await response.json()
    const {videos} = data;
    console.log(videos);

        return{
            // url : videos.youtube_url,
            // title : videos.title,
            // description : videos.description,
            ...data
        }   
}

export const foto = async () => {

    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/437133`
    const response = await fetch(url)
    const data = await response.json()
    // const {images} = data;
    console.log(foto)

    return{
        // url : images.url,
        // id : images.image_id
        ...data
    }



}