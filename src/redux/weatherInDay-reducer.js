import { weatherAPI } from '../api/api'

const SET_DAYS_WEATHER = 'weatherInDay/SET_DAYS_WEATHER'
const SET_SEARCH_LOCATION = 'weatherInDay/SET_SEARCH_LOCATION'
const TOGGLE_IS_FETCHING = 'weatherInDay/TOGGLE_IS_FETCHING'
const WRONG_CITY_NAME = 'weatherInDay/WRONG_CITY_NAME'

let initualState = { 
  isFetching: false,
  error: null,
  searchInProgres: [],
  daysWeather: [],
}


const DayWeatherReduser = (state = initualState, action) => { 
  switch (action.type) {
    case SET_DAYS_WEATHER:{
      return{...state, daysWeather: action.daysWeather, error: null}
    }
    case SET_SEARCH_LOCATION:{
      return{...state, searchInProgres: action.location, error: null}
    }
    case TOGGLE_IS_FETCHING: { 
      return {...state, isFetching: action.isFetching, error: null}
    }
    case WRONG_CITY_NAME: { 
      return {
        ...state,  
        daysWeather: [], 
        searchInProgres: [], 
        error: 'Sorry this city non-existent, maybe you made a mistake.'
      }
    }
    default: 
      return state
  }
}

export const setDaysWeatherAC = (daysWeather) => ({type: SET_DAYS_WEATHER, daysWeather})
export const setSearchLocationAC = (location) => ({type: SET_SEARCH_LOCATION, location})
export const toggleIsFechingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const wrongCityNameAC = () => ({type: WRONG_CITY_NAME})

export const search = (cityName) => async (dispatch) => {
  dispatch(toggleIsFechingAC(true))
  let data = await weatherAPI.getSearchLocation(cityName)
  dispatch(toggleIsFechingAC(false))
  
  data.length > 0 
    ? dispatch(setSearchLocationAC(data))
    : dispatch(wrongCityNameAC()) 
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