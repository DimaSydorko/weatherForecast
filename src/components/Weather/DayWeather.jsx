import React from 'react'
import styles from './Weather.module.css'
import Day from './Day'

let DayWeather = ({daysWeather, searchResults, daysWeatherRequest, forecastHeadline, ...props}) => {
  return (
    <div>
      <div className={styles.weekForecast} >
        { forecastHeadline ? 
          <div className={styles.forecastHeadline}>
            {forecastHeadline.Text}
          </div> 
        : null }
        <div className={styles.dayInWeekContainer}>
          { daysWeather ? 
            daysWeather.map( d => <Day 
              className={styles.dayInWeek}
              day={d}/>
            )
          : null }
        </div>
      </div>
    </div>
  )
}

export default DayWeather