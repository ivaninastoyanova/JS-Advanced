function addDestination() {
    let input = document.getElementById('input');
    let summaryBox = document.getElementById('summaryBox');
    let tbody = document.getElementById('destinationsList');
    let city = input.querySelector('input:nth-child(2)')
    let country = input.querySelector('input:nth-child(4)');
    let season = input.querySelector('#seasons').value;

    let tr = document.createElement('tr');
    let tdCityAndCountry = document.createElement('td');
    let tdSeason = document.createElement('td');

    if(city.value == '' || country.value == ''){
        return;
    }

    tdCityAndCountry.textContent = `${city.value}, ${country.value}`
    tdSeason.textContent = season[0].toUpperCase() + season.slice(1);
    
    tr.appendChild(tdCityAndCountry);
    tr.appendChild(tdSeason);
    tbody.appendChild(tr);

    
    [summer, autumn, winter, spring] = Array.from(summaryBox.querySelectorAll('input'));
    const storeSeason = {
        summer: summer,
        autumn: autumn,
        winter: winter,
        spring: spring
    }
    storeSeason[season].value = Number(storeSeason[season].value) + 1;


    city.value='';
    country.value='';

}