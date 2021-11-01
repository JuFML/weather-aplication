const APIKey = 'Q9kpfRrlyQHcGjTAiLrQjtobDRMNJTU3'

const getCityData = async (city) => {
    const urlCityData = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${city}`
    const response = await fetch(urlCityData)
    const [cityData] = await response.json()
    return cityData
}

const getCityWeather = async (cityKey) => {
    const {Key, LocalizedName} = await getCityData(cityKey)
    const urlCityWeather = `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}&language=pt-br`
    const response = await fetch(urlCityWeather)
    const [cityWeather] = await response.json()
    return cityWeather
}

