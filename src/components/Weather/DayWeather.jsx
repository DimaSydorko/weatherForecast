import React from 'react'
import styles from './Weather.module.css'
import Day from './Day'

let DayWeather = ({daysWeather, searchResults, daysWeatherRequest, forecastHeadline, errorSearch, ...props}) => {
  return (
    <div>
      <div className={styles.weekForecast} >
        <div className={styles.dayInWeekContainer}>
          { daysWeather ? 
            daysWeather.map( d => <Day 
              className={styles.dayInWeek}
              day={d}/>
              )
          : <div className={styles.errorSearch}>
              {errorSearch}
            </div> 
          }
        </div>
              { forecastHeadline ? 
                <div className={styles.forecastHeadline}>
                  {forecastHeadline.Text}
                </div> 
              : null }
      </div>
    </div>
  )
}

export default DayWeather