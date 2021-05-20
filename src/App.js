import styles from'./App.module.css';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { compose } from 'redux';
import { withSuspense } from './components/hoc/withSuspense';
import HeaderContainer from './components/Header/HeaderContainer';
const DayWeatherContainer = React.lazy(() => import ('./components/Weather/DayWeatherContainer'))

class App extends Component {
  render() {
    return (
      <div className={styles.BG}>
        <HeaderContainer/>
        <div>
          <Switch>
            <Route path='*'  render={withSuspense(DayWeatherContainer)}/>
          </Switch>
        </div>
      </div>
    )
  }
}

export default compose(withRouter) (App)