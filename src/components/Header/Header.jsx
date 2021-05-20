import { Field, Form, Formik } from 'formik'
import React from 'react'
import styles from './Header.module.css'
import * as yup from 'yup'
import SearchLocationResult from './searchResult'

const validationSchema = yup.object().shape({
  searchCity: yup.string()
    .max(20, 'Too long name')
    .required('Required'),
})

let Header = ({search, searchResults, daysWeatherRequest}) => {
  return (
    <div className={styles.headerSolid}>
      <div className={styles.search}>
        <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={formData => {
          search(formData.searchCity)
        }}>
          {({handleSubmit, handleChange, touched, errors}) => (
            <Form onSubmit={handleSubmit}>
              {errors.searchCity && touched.searchCity ? (
                <div className={styles.errorSearch}>{errors.searchCity}</div>
              ) : null}

              <button className={styles.searchButton} type='submit'>Search</button>
              
              <div className={styles.dropdown}>
                <Field
                  type={'search'}
                  name={'searchCity'}
                  placeholder={'Write city...'}
                  autocomplete={"off"}
                  onChange={handleChange}
                />
              <div className={styles.dropdownСontent}>
                  {searchResults.map(loc => 
                    <SearchLocationResult 
                    daysWeatherRequest={daysWeatherRequest}
                    location={loc} 
                    key={loc.Key}/>
                  )}
                </div>
              </div>
              
            </Form>
          )}
        </Formik>
      </div>
      <header className={styles.headerText}>
        Weather forecast
      </header>
    </div>
  )
}

export default Header