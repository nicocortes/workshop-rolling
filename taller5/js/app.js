import {getProductos} from '../helpers/fetch.js'

let productos = []
const containerOptions = document.querySelector('#lista_categorias')       
const container = document.querySelector('#container_cards')


getProductos().then((resp) => {
    productos = resp
    if(resp){
        document.querySelector('#mensaje').classList.add('d-none')
    }
    categories(productos)
    loadCards(productos)
})


const categories = (productos) => {
  let categories = [...new Set(productos.map((producto) => {
    return producto.category
    }))]
    
    categories.map((item) => {
      const option = `<option value="${item}">${item}</option>`
      containerOptions.innerHTML += option
    })
  }

  

const loadCards = (productos) => {
    productos.map((producto) => {
        const {title, price, rating:{rate}, image} = producto

        const rowCard = document.createElement('div')
        rowCard.setAttribute('class', 'col-12 col-md-6')

        const card = `
        <div class="card mb-3 shadow">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${image}" class="img-fluid rounded-start p-2" alt="${title}">
          </div>
          <div class="col-md-8">
            <div class="card-body h-100 d-flex flex-column justify-content-between">
            <div>
                <h5 class="card-title">${title}</h5>
                <p class="card-text"><small class="text-muted">$ ${price}</small></p>
            </div>
              <div>
                <button type="button" class="btn btn-warning float-end">
                Calificación
                <span class="badge bg-light text-dark">${rate}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`
        
      rowCard.innerHTML = card
      container.appendChild(rowCard)
    })
}
  

containerOptions.addEventListener('change', (event) => {
    container.innerHTML = ''
    const arrayFilter = productos.filter(item => item.category === event.target.value)

    if(event.target.value !== 'all'){
      loadCards(arrayFilter)
    } else {
      loadCards(productos)
    }
})