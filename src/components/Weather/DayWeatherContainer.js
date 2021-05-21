import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getDaysWeather, getErrorSearch, getForecastHeadline, getIsFetching } from '../../redux/dayWeather-selector'
import DayWeather from './DayWeather'
import styles from './Weather.module.css'

class DayWeatherContainer extends React.Component {
  render() {
    return<>
    {this.props.isFetching ? <div className={styles.loading}>Waiting for a data...</div> : null}
      <DayWeather 
        daysWeather={this.props.daysWeather}
        forecastHeadline={this.props.forecastHeadline}
        errorSearch={this.props.errorSearch}
      />
    </>
  }
}

let mapStateToProps = (state) => {
  return{
    daysWeather: getDaysWeather(state),
    isFetching: getIsFetching(state),
    errorSearch: getErrorSearch(state), 
    forecastHeadline: getForecastHeadline(state),
  }
}

export default compose(
  connect(mapStateToProps)
) (DayWeatherContainer)