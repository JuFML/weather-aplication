const form = document.querySelector('[data-js="change-location"]')
const input = document.querySelector('[data-js="change-location"]')
const cityName = document.querySelector('[data-js="city-name"]')
const cityWeather = document.querySelector('[data-js="city-weather"]')
const cityTemperature = document.querySelector('[data-js="city-temperature"]')
const weatherImg = document.querySelector('[data-js="time"]')
const weatherInfoContainer = document.querySelector('[data-js="city-card"]')

const hideWeatherInfoContainer = () => {
    return weatherInfoContainer.classList.contains('d-none') && weatherInfoContainer.classList.remove('d-none')
}

const showCityAndWeatherData = (LocalizedName, WeatherText, temperature, IsDayTime) => {
    cityName.textContent = LocalizedName
    cityWeather.textContent = WeatherText
    cityTemperature.textContent = temperature
    IsDayTime ? weatherImg.src = './src/img/day.svg' : weatherImg.src = './src/img/night.svg'
}

const getCityAndWeatherData = async inputValue => {
    const { Key, LocalizedName } = await getCityData(inputValue)
    const { WeatherText, Temperature, IsDayTime } = await getCityWeather(Key)
    const temperature = Temperature.Metric.UnitType

    showCityAndWeatherData(LocalizedName, WeatherText, temperature, IsDayTime)
}

const showLocalStorageCity = () =>  {
    const city = localStorage.getItem('city')
    
    if(city) {
        hideWeatherInfoContainer()
        getCityAndWeatherData(city)
    }
}

form.addEventListener('submit', async event => {
    event.preventDefault()

    const inputValue = event.target.city.value

    hideWeatherInfoContainer()
    getCityAndWeatherData(inputValue)

    localStorage.setItem('city', inputValue)

    form.reset()     
})

showLocalStorageCity()