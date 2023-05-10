'use strict'

import { carregarVideo } from "./videos.js"

const routes = {
    '/': '/index.html',
    '/collections' : '../pages/collections.html',
    '/videos'     : '../pages/videos.html'
}


const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)
   
    const path = window.location.pathname
    const route = routes[path]

    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html

    console.log(html)

    if(path == '/videos'){
        carregarVideo()
    } else if (path == '/collections'){

    }


}


window.route = route;
