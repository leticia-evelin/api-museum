'use strict'

 export const colecoes = async () => {
    // let token = "d5e35518b330cab7beb621b5c68cad84";
    const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.videos.getList&access_token=d5e35518b330cab7beb621b5c68cad84&page=1&per_page=5`
    const response = await fetch(url)
    const data = await response.json()
    const {videos} = data;
    console.log(videos);

        return{
            url : videos.youtube_url,
            title : videos.title,
            description : videos.description,
        }

    
}