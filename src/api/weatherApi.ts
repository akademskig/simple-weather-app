
class WeatherApi {
    appId="0ee007e388b757d6a5a2cd86340b4295"
    apiUrl = `https://api.openweathermap.org/data/2.5/weather`
     fetchWeather = async (query?: string) => {
        const response = await fetch(this.apiUrl.concat(`?q=${query}&units=metric&appid=${this.appId}`))
        if (response.status === 200) {
            return response.json()
        }
        else {
            throw new Error('Unable to fetch weather-.')
        }
    }
}

export default new WeatherApi()