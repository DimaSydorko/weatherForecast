import React from "react"
import styles from '../Weather/Weather.module.css'

export const withSuspense = (Component) => {
  return (props) => {
    return <React.Suspense fallback={
      <div className={styles.loading}>Loading...</div>
    }>
      <Component {...props}/>
    </React.Suspense>
  }
}