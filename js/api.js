'use strict'

 export const colecoes = async () => {
    // let token = "d5e35518b330cab7beb621b5c68cad84";
    const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.videos.getList&access_token=d5e35518b330cab7beb621b5c68cad84&page=1&per_page=10`
    const response = await fetch(url)
    const data = await response.json()
    console.log(colecoes);


        return{
            url : data.youtube_url,
            title : data.title,
            description : data.description,
        }

    // return{
    //     ...data
    // }
}