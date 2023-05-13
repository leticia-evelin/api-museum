'use strict'



class card extends HTMLElement {
    constructor(){
        super()
        this.shadow = this.attachShadow({mode: 'open'}) //pode alterar as opções
        this.title = 'Video'
        this.description = ''
        this.iframe = null
        this.src = ''
        this.width = '560'
        this.height = '315'
        this.allowFullscreen = true

    }

    static get observedAttributes(){
        return['title', 'description', 'iframe', 'src', 'width', 'height', 'allowFullscreen']
    }

 
    attributeChangedCallback(nameAttr, oldValue, newValue){

        // if(oldValue !== newValue){
            this[nameAttr] = newValue
        // }
      
    }
 
    connectedCallback(){
       this.shadow.appendChild(this.component())
       this.shadow.appendChild(this.styles())
    }
 
    styles(){
       const css = document.createElement('style')
       css.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        .card{
            display: flex;
            align-items: center;
            width: 800px;
            height: 550px;
        }
        
        .card__title{
            display: flex
            text-align: center;
            font-family: 'Inter', sans-serif;
        }
        
        .card__description{
            text-align: center;
            width: 750px;
            font-family: 'Inter', sans-serif;
        }
        .card-video{
            display: flex;
            align-items: center;
            width: 800px;
            height: 550px;
            color: tomato;
        }
    
       `

       return css
    }

    component(){
        const card = document.createElement('div')
        card.classList.add('card')

        const title = document.createElement('div')
        title.classList.add('card__title')
        title.textContent = `${this.title}` 


        const description = document.createElement('p')
        description.classList.add('card__description')
        description.textContent = `${this.description}`

        const iframe = document.createElement('iframe')
        iframe.classList.add('card__video')
        iframe.width = this.width
        iframe.height = this.height
        iframe.src = `${this.iframe}`
        iframe.allowFullscreen =`${this.allowFullscreen}`


       
        
        card.append(title, description, iframe)


        return card

    }
      
 }
 


 customElements.define('card-video', card);

