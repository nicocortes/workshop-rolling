import {getCripto} from './helpers/fetch.js'

let cripto = []

getCripto().then((resp) => {
    cripto = resp
    cargarTabla()
})

const updateData = () => {
    document.querySelector('#tableBody').innerHTML = ""
    getCripto().then((resp) => {
        cripto = resp
        cargarTabla()
    })
}
window.setInterval(updateData, 120000)


const cargarTabla = () => {
    let contenedor = document.querySelector('#tableBody')

    cripto.map((item) => {
        let tr = document.createElement('tr')
        let contenido = `
        <td class="text-center">${item.rank}</td>
        <td><image src="https://assets.coincap.io/assets/icons/${item.symbol.toLowerCase()}@2x.png"> ${item.name}</td>
        <td>${numeral(item.priceUsd).format('$0,0.00')}</td>
        <td>${numeral(item.marketCapUsd).format('($ 0.00 a)')}</td>
        <td>${numeral(item.vwap24Hr).format('$0,0.00')}</td>
        <td>${numeral(item.supply).format('0.0a')}</td>
        <td class="text-center">${numeral(item.volumeUsd24Hr).format('($ 0.00 a)')}</td>
        <td class=${item.changePercent24Hr > 0 ? "text-green" : "text-red"}>${Number(item.changePercent24Hr).toFixed(2)}%</td>`
  
        tr.innerHTML = contenido
        contenedor.appendChild(tr)
    })
  }


