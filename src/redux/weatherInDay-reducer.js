import { weatherAPI } from '../api/api'

const SET_DAYS_WEATHER = 'weatherInDay/SET_DAYS_WEATHER'
const SET_SEARCH_LOCATION = 'weatherInDay/SET_SEARCH_LOCATION'
const TOGGLE_IS_FETCHING = 'weatherInDay/TOGGLE_IS_FETCHING'

let initualState = { 
  isFetching: false,
  searchInProgres: [],
  daysWeather: [],
}


const DayWeatherReduser = (state = initualState, action) => { 
  switch (action.type) {
    case SET_DAYS_WEATHER:{
      return{...state, daysWeather: action.daysWeather}
    }
    case SET_SEARCH_LOCATION:{
      return{...state, searchInProgres: action.location}
    }
    case TOGGLE_IS_FETCHING: { 
      return {...state, isFetching: action.isFetching}
    }
    default: 
      return state
  }
}

export const setDaysWeatherAC = (daysWeather) => ({type: SET_DAYS_WEATHER, daysWeather})
export const setSearchLocationAC = (location) => ({type: SET_SEARCH_LOCATION, location})
export const toggleIsFechingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const search = (cityName) => async (dispatch) => {
  dispatch(toggleIsFechingAC(true))
  let data = await weatherAPI.getSearchLocation(cityName)
  dispatch(toggleIsFechingAC(false))

  dispatch(setSearchLocationAC(data))
}

export const daysWeatherRequest =  (locationKey) =>{
  return async (dispatch) => {
    dispatch(toggleIsFechingAC(true))
    let data = await weatherAPI.getWeather(locationKey)
    dispatch(toggleIsFechingAC(false))

    dispatch(setDaysWeatherAC(data))
  }
}

export default DayWeatherReduser