import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { getSearchResult } from '../../redux/dayWeather-selector';
import { daysWeatherRequest, search } from '../../redux/weatherInDay-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  render() {
    return<div>
      <Header search={this.props.search}
        searchResults={this.props.searchResults}
        daysWeatherRequest={this.props.daysWeatherRequest}/>
    </div>
  }
}

let mapStateToProps = (state) => {
  return{
    search: state.search,
    searchResults: getSearchResult(state),
  } 
}

export default compose (
  connect(mapStateToProps, {search, daysWeatherRequest}) 
)(HeaderContainer)