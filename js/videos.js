'use strict'


import { colecoes } from "./api.js"
let teste = await colecoes();


// class cardVideo extends HTMLElement {
//    constructor(){
//        super()
//        //virando global this.
//        this.shadow = this.attachShadow({mode: 'open'}) //pode alterar as opções
//    }

//    attributeChangedCallback(nameAttr, oldValue, newValue){
//       this[nameAttr] = newValue 
//    }

//    connectedCallback(){
//       //metodos/função
//       this.shadow.appendChild(this.component())
//       this.shadow.appendChild(this.styles())
//    }

//    styles(){
//       const css = document.createElement('style')
//       css.textContent = `
   
   
//       `
//    }
   // component(video){

   const cardVideo = (teste) => {
 
      const card = document.createElement('div')
      card.classList.add('card')

      const name = document.createElement('h3')
      name.classList.add('card__title')
      name.textContent = teste.title

      const description = document.createElement('p')
      description.classList.add('card__description')
      description.textContent = teste.description

      const video = document.createElement('video')
      video.classList.add('card__video')
      // video.textContent = teste.youtube_url
      video.src = teste.youtube_url
      video.autoplay = true;

      card.append(name, video, description)

      return card

   }


   const carregar = async () => {
      
      console.log(teste)
      const container = document.getElementById('container')
      const cards =  teste.videos.map(cardVideo)
      container.replaceChildren(...cards)
   }

  
carregar()

// customElements.define('container-art', cardVideo)

