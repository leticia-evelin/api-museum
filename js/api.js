'use strict'

 export const colecoes = async () => {
    let list = []
    const url = `https://collectionapi.metmuseum.org/public/collection/v1/objectsId`
    const response = await fetch(url)
    const data = await response.json()
    console.log(colecoes);

    // let primeiraArte = data.
    // data.results.map(element => {
    //     list.push(element.url)
    // })

    // return list
    return {
        image: data.primaryImage,
        name: data.title,
        culture: data.culture,
        date: data.objectDate
    }
}