import axios from "axios"

export const weatherAPI = {
  getWeather (locationKey = 324561, key='6soIrRVXO04MQFY4YXJEnRaUuuvob0Uo') {
    return axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${key}`)
    .then(response => {
      console.log(response.data)
      return response.data
    })
  },
    
    getSearchLocation (cityName='lviv', key="6soIrRVXO04MQFY4YXJEnRaUuuvob0Uo") {
      return axios.get(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${cityName}&details=${false}&offset=${1}`)
      .then(response => {
        console.log(response.data)
        return response.data
      })
    },
} 