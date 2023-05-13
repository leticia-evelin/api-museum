'use strict'

 export const colecoes = async () => {
    // let token = "d5e35518b330cab7beb621b5c68cad84";
    const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.videos.getList&access_token=d5e35518b330cab7beb621b5c68cad84&page=1&per_page=10`
    const response = await fetch(url)
    const data = await response.json()
    const {videos} = data;
        return{
            // url : videos.youtube_url,
            // title : videos.title,
            // description : videos.description,
            ...data
        }   
}

export const exibicao = async () => {

    const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.people.getOnDisplay&access_token=d5e35518b330cab7beb621b5c68cad84&page=1&per_page=20`
    // const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.people.getOnDisplay&access_token=d5e35518b330cab7beb621b5c68cad84&page=21&per_page=13`
    // const url = `https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.people.getOnDisplay&access_token=d5e35518b330cab7beb621b5c68cad84&page=2&per_page=4`
    const response = await fetch(url)
    const data = await response.json()
    const {people} = data;
    // console.log(people)
        return{
            // nome : people.name,
            // time: people.date

            ...data
        }


}



