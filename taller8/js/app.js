const url = 'https://swapi.dev/api/people'

const getCharacter = async () => {
    const response = await fetch('https://swapi.dev/api/people/')
    const {results} = await response.json()
    return results
}

const getHomeworld = async (homeworld) => {
    const response = await fetch(homeworld)
    const data = await response.json()
    return data
}

const openModal = (homeworld) => {
    let dataHomeworld
    document.querySelector('#modal-body').innerHTML = ""
    getHomeworld(homeworld).then((response) => {
        dataHomeworld = response
        loadModal(dataHomeworld)
    })
}

const loadModal = (dataHomeworld) =>{
     const {name, population, climate, gravity, terrain} = dataHomeworld

    let modalBody = document.querySelector('#modal-body')
  
    let modalContent = document.createElement('ul')

    let modalData = `
          <li><b>Name:</b> ${name}</li>
          <li><b>Population:</b> ${population}</li>
          <li><b>Climate:</b> ${climate}</li>
          <li><b>Gravity:</b> ${gravity}</li>
          <li><b>Terrain:</b> ${terrain}</li>
          `

          modalContent.innerHTML = modalData
          modalBody.appendChild(modalContent)
}

let characters;

getCharacter().then((resp) => {
    characters = resp
    loadAccordion(characters)
    if(characters){
      document.querySelector('#loading-alert').classList.add('d-none')
    }
})



const loadAccordion = (characters) => {
    let contenedor = document.querySelector('#accordionCharacters')
    

    characters.map((item, index) => {
        const {name, birth_year, gender, hair_color, height, mass, homeworld} = item
        const content = document.createElement('div')

        const accordion = `
        <div class="accordion-item mt-2">
        <h2 class="accordion-header" id="heading${index}">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
          ${name}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
          <p><b>Birth Year:</b> ${birth_year}</p>
          <p><b>Gender:</b> ${gender}</p>
          <p><b>Hair Color:</b> ${hair_color}</p>
          <p><b>Height:</b> ${height}</p>
          <p><b>Mass:</b> ${mass}</p>
          <button onclick="openModal('${homeworld}')" type="button" class="btn bg-dark text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Planet
            </button>
          </div>
        </div>
      </div>`
  
      content.innerHTML = accordion
        
        contenedor.appendChild(content)
    })
  }
