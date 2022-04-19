let nfts = []


const getNFT = async () => {
    const response = await fetch('./data.json')
    const {data} = await response.json()
    return data
}

getNFT().then((resp) => {
    const {items, address} = resp
    nfts = items

    nfts = items.filter((item) => {
        return item.type === "nft";
      });

    document.querySelector('#direccion').innerText = address
    loadCards(nfts)
})

const loadCards = (nfts) => {
    const container = document.querySelector('#contenedor')
    nfts.map((nft) => {
        const card = document.createElement('div')
        card.classList = 'col'

        const {nft_data} = nft

        if(nft_data){
            const {external_data: data} = nft_data[0]

            const content = `
            <div class="card">
            <img src=${data.image_512} class="card-img-top" alt=${data.name}>
            <div class="card-body">
            <h5 class="card-title">${data.name}</h5>
            </div>
            </div>`

            card.innerHTML = content
            container.appendChild(card)
        }
    })
}