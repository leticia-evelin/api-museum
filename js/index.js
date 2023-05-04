'use strict'


import { colecoes } from "./api.js"
let all = await colecoes();




   const cardVideo = (video) => {

      const card = document.createElement('a')
      card.href = "./index.html"
      card.target = 'blank_'
      card.classList.add('card')

      const name = document.createElement('h3')
      name.classList.add('card__name')
      name.textContent = all.title

      const description = document.createElement('p')
      description.classList.add('card__description')
      description.textContent = video.description

      const img = document.createElement('span')
      img.classList.add('card__date')
      img.textContent = video.youtube_url


      card.append(name, img, description)

      return card

   }



const carregar = () => {

   const container = document.getElementById('container-art')
   const cards = all.video.map(cardVideo)
   container.append(...cards)
}

carregar()

