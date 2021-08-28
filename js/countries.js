const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = (counties) => {
    const countreisDiv = document.getElementById('countreis')

    counties.forEach(countrey => {
        const div = document.createElement('div')
        div.classList.add('countery');
        div.innerHTML = `
            <h3>${countrey.name}</h3>
            <p>${countrey.capital}</p>
            <button onclick = "loadcountryByName('${countrey.name}')">Details</button>
        `
            // const h3 = document.createElement('h3');
            // h3.innerText = `Countery name: ${countryName}.`;
            // div.appendChild(h3)
            // const p = document.createElement('p');
            // p.innerText = `CallingCode: ${countrey.callingCodes}`
            // div.appendChild(p);
            // const btn = document.createElement('button');

        // btn.onclick = "loadcountryByName()";
        // btn.innerText = 'details';
        // div.appendChild(btn);
        countreisDiv.appendChild(div);
    })
}
const loadcountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = country => {
    console.log(country.name);
    const countryDIv = document.getElementById('country-div');
    countryDIv.innerHTML = `
    <h3>${country.name}</h3>
    <p>population: ${country.population}<p>
    <img width="200px" src="${country.flag}" />
    `
}