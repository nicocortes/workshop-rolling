let users = []

const getData = async () => {
	const resp = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await resp.json();
	return data;
};

getData().then(function(res){
  users = [...res]
  loadTable(users)
})

const loadTable = (users) => {
  users.map((user) => {
      const {name, email, phone, address:{city, suite, street, geo:{lat, lng}}, company:{catchPhrase, name:companyName}} = user
    
    const container = document.querySelector('#table-body')
    const row = document.createElement('tr')
    
    const rowContent = `<td>${name}</td>
    <td>${email}</td>
    <td>${phone}</td>
    <td>${street} - ${suite} (Coord: ${lat}, ${lng})</td>
    <td>${city}</td>`

   row.innerHTML = rowContent
   container.appendChild(row)

   loadQuotes(catchPhrase, companyName)
  }) 
}


const loadQuotes = (catchPhrase, companyName) => {
  const containerQuote = document.querySelector('#container-quotes')
  const div = document.createElement('div')

  const quote = `<h5>${catchPhrase}</h5><p>__ <span class="font-weight-light">${companyName}</span></p>`
  div.innerHTML = quote
  containerQuote.appendChild(div)
}
