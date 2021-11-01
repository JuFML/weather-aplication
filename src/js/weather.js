const APIKey = 'Q9kpfRrlyQHcGjTAiLrQjtobDRMNJTU3'

const getCityData = async (city) => {
    try {
        const urlCityData = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${city}`
        const response = await fetch(urlCityData)
        const [cityData] = await response.json()
        return cityData
    } catch (error) {
        alert(`${error.name}: ${error.message}`)
    }
}

const getCityWeather = async (cityKey) => {
    try {
        const {Key, LocalizedName} = await getCityData(cityKey)
        const urlCityWeather = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
        const response = await fetch(urlCityWeather)
        const [cityWeather] = await response.json()
        return cityWeather
    } catch (error) {
        alert(`${error.name}: ${error.message}`)
    }
}

