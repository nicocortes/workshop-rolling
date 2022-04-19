let heroes = {}

const getData = async () => {
    try {
        const resp = await fetch('data/superheroes.json')
        const data = await resp.json();

        return data;
    } catch (error){
        return error
    }
}

getData().then((resp) => {
    heroes = {...resp}
    infoHeroes(heroes)
})


const infoHeroes = (heroes) => {
 const {hometown, formed, squadName, members} = heroes

 document.querySelector('#title').innerText = squadName
 document.querySelector('#subtitle').innerHTML = `<h3><b>Hometown: </b>${hometown} | <b>Formed: </b>${formed}</h3>`
 loadMembers(members)
}

const loadMembers = (members) => {
    
    members.map((member) => {
        const {name, age, powers, secretIdentity} = member
        const container = document.querySelector('#container')
        const col = document.createElement('div')
        col.setAttribute('class', 'col col-md-4')

        const description = `
        <h1>${name}</h1>
        <p><b>Secret Identity: </b>${secretIdentity}</p>
        <p><b>Age: </b>${age}</p>
        <p><b>Superpowers: </b></p>
        <ul>${powers.map((power) => {
            return `<li>${power}</li>`
        }).join('')}</ul>`

        col.innerHTML = description
        container.appendChild(col)
    })
}