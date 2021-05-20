import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

let SearchLocationResult = ({location, daysWeatherRequest}) => {
  let weatherRequestByPosition = (locationKey) => {
    daysWeatherRequest(locationKey)
  } 

  return(
    <div className={styles.searchLocation}>
      <NavLink to={'/weather/'+location.Key} className={styles.searchLocationLink}
        onClick={() => weatherRequestByPosition(location.Key)}>
          <div>
            {location.EnglishName} {location.AdministrativeArea.EnglishName} {location.Country.ID} {location.Region.ID} 
          </div>
      </NavLink>
    </div>
  )
}

export default SearchLocationResult