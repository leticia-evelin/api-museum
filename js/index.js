'use strict'

import { colecoes } from "./api.js"
let art = await colecoes();
console.log(art);
const objectID = localStorage.getItem('id_card')


   const cardArt = () => {

      const card = document.createElement('a')
      card.href = "./index.html"
      card.target = 'blank_'
      card.classList.add('card')

      const nome = document.createElement('h3')
      nome.classList.add('card__name')
      nome.textContent = art.name

      const cultura = document.createElement('p')
      cultura.classList.add('card__culture')
      cultura.textContent = art.culture

      const data = document.createElement('span')
      data.classList.add('card__date')
      data.textContent = art.date

      const img = document.createElement('img')
      img.classList.add('card__image')
      img.src = art.image

      card.append(img, nome, cultura, data)

      return card

   }



const carregar = async () => {

    const container = document.getElementById('container-art')

    container.replaceChildren(...artes)
}

carregar()

