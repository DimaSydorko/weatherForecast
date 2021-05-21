import { createSelector } from "reselect"

const getDaysWeatherSelector = (state) => {
  return state.dayWeather
}

export const getDaysWeather = createSelector(getDaysWeatherSelector, 
  (days) => {
    if (days.daysWeather != 0) 
      return days.daysWeather.DailyForecasts.filter(u => true)
    else return null
})

export const getForecastHeadline = (state) => {
  if (state.dayWeather.daysWeather != 0) 
  return state.dayWeather.daysWeather.Headline
else return null
}

export const getIsFetching = (state) => {
  return state.dayWeather.isFetching
}

export const getSearchResult = (state) => {
  return state.dayWeather.searchInProgres
}