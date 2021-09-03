fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))

const displayCountries = countries => {
    // console.log(countries); //Show API is working
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        // console.log(country.name);//show country list

        
        const countryDiv = document.createElement('div');

        //It's long version appending. May be managed problem many element 

      /*  const h3 = document.createElement('h3');
        h3.innerText = country.name;
        const p = document.createElement('p');
        p.innerText = country.capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p); */

        //Short version to manage element easily
        countryDiv.className = 'country';
        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);

    }
}