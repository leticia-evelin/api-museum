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

      const iframe = document.createElement('iframe')
      iframe.classList.add('card__video')
      iframe.width = '560'
      iframe.height = '315'
      iframe.src = "https://" + teste.youtube_url.replace("watch?v=", "embed/");
      iframe.autoplay;
      iframe.allowFullscreen = true;
      

      card.append(name, description, iframe)

      return card

   }


   export const carregarVideo = async () => {
      
      console.log(teste)
      const container = document.getElementById('container-videos')
      const cards =  teste.videos.map(cardVideo)
      container.replaceChildren(...cards)
   }

  
carregarVideo()

// customElements.define('container-videos', cardVideo)

