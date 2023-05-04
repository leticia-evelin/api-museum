'use strict'


import { colecoes } from "./api.js"
let videos = await colecoes();


class cardVideo extends HTMLElement {
   constructor(){
       super()
       //virando global this.
       this.shadow = this.attachShadow({mode: 'open'}) //pode alterar as opções
   }

   attributeChangedCallback(nameAttr, oldValue, newValue){
      this[nameAttr] = newValue 
   }

   connectedCallback(){
      //metodos/função
      this.shadow.appendChild(this.component())
      this.shadow.appendChild(this.styles())
   }

   styles(){
      const css = document.createElement('style')
      css.textContent = `
   
   
      `
   }
   component(){

      const card = document.createElement('a')
      card.href = "./index.html"
      card.target = 'blank_'
      card.classList.add('card')

      const name = document.createElement('h3')
      name.classList.add('card__title')
      name.textContent = video.title

      const description = document.createElement('p')
      description.classList.add('card__description')
      description.textContent = video.description

      const img = document.createElement('span')
      img.classList.add('card__video')
      img.textContent = video.youtube_url


      card.append(name, img, description)

      return card

   }

   

}
   const carregar = () => {

      const container = document.getElementById('container')
      const cards = (cardVideo)
      container.replaceChild(...cards)
   }

carregar()

customElements.define('container-art', cardVideo)

