'use strict'

import { exibicao } from "./api.js"
let dados = await exibicao();


const cardPeople = (dados) => {

    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h2')
    name.classList.add('card__name')
    name.textContent = dados.name;

    const description = document.createElement('p')
    description.classList.add('card__biography')
    description.textContent = dados.biography;

    const date = document.createElement('p')
    date.classList.add('card__date')
    date.textContent = dados.date;
  
    const objetos = document.createElement('span')
    objetos.classList.add('card__objects')
    objetos.textContent = "Number of works on display: " + dados.count_objects_on_display;

    card.append(name, date, description, objetos)

    return card
}

export const carregarObjetos = async () => {
      
    const container = document.getElementById('container-collections')
    const cards =  dados.people.map(cardPeople)
    container.replaceChildren(...cards)
 }


carregarObjetos()