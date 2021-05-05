import { API_URL, API_KEY, COUNTRY_URL } from './config.js'
import { byId, setImg } from './helpers.js'
const searchInput = document.getElementById('input')

const gettingWeather = () => {
    fetch(`${API_URL}/data/2.5/weather?q=${searchInput.value}&appid=${API_KEY}&units=metric`)
        .then(resp => {
            return resp.json()
        })
        .then(data => {
            console.log(data);
            byId('city', data.name)
            byId('country', data.sys.country)
            byId('temp', `C° ${data.main.temp}`)
            setImg('CountryId', `${COUNTRY_URL}/${data.sys.country}/flat/64.png`)
            setImg('tempIcon', `${API_URL}/img/w/${data.weather[0].icon}.png`)
            if (data.name === "Stepanakert") {
                setImg('CountryId', `${COUNTRY_URL}/${"AM"}/flat/64.png`)
                byId('country', "AM")
            }
        })
        .catch(error => {
            byId('city', 'City is not found')
            byId('country', 'City is not found')
            byId('temp', 'City is not found')
            setImg('CountryId', "")
            console.log(error, 'catch');
        })
}

document.getElementById('searchButton').addEventListener('click', gettingWeather)

searchInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        gettingWeather()
    }
})