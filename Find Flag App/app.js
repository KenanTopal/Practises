const searchBtn = document.querySelector('#search');
const countryInput = document.querySelector('#country-input');

searchBtn.addEventListener('click', ()=>{
 const countryName = countryInput.value;
 const finalUrl = `https://restcountries.com/v3.1/name/${countryName}?fullText=true
 `
 /* console.log(finalUrl) */
 fetch(finalUrl)
 .then((response) => response.json())
 .then((data) => {
/*   console.log(data[0])
  console.log(data[0].name.common)
  console.log(data[0].flags.svg)
  console.log(data[0].capital[Object.keys(data[0].capital)])
  console.log(data[0].population)
  console.log(data[0].languages[Object.keys(data[0].languages)])
  console.log(data[0].currencies[Object.keys(data[0].currencies)].name) */
/*   for(let i= 0; i<data[0].borders.length; i++){
    console.log(data[0].borders[i])
  } */

  let div = document.querySelector('#picked-country')
  div.innerHTML = ` <div>
  <img src="${data[0].flags.svg}" height="200px" alt="">
</div>
<div class="ms-4">
  <p>Name: <span class="name">${data[0].name.common}</span></p>
  <p>Capital: <span class="capital">${data[0].capital[Object.keys(data[0].capital)]}</span></p>
  <p>Population: <span class="population">${data[0].population}</span></p>
  <p>Language: <span class="language">${data[0].languages[Object.keys(data[0].languages)]}</span></p>
  <p>Currency: <span class="currency">${data[0].currencies[Object.keys(data[0].currencies)].name}</span></p>
</div>
</div>`
 })
})