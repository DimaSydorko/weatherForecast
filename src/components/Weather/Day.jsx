import styles from './Weather.module.css'

import sunCloudRainImg from '../../imeges/cloudyRain.svg'
import sunImg from '../../imeges/sun.png'
import CloudsSunImg from '../../imeges/CloudsSun.svg'
import RainImg from '../../imeges/rain.png'
import stormImg from '../../imeges/storm.png'

let convertToCels = (F) => {
    return Math.round((F-32)*5/9)
}

let chooseIMG = (str) => {
  let weatherIMG=null 
  if (str.search(/cloud/i)>=0) weatherIMG=CloudsSunImg
  if (str.search(/clear/i)>=0) weatherIMG=sunImg
  if (str.search(/rain/i)>=0) weatherIMG=RainImg
  if (str.search(/sunny/i)>=0) weatherIMG=sunImg
  if (str.search(/showers/i)>=0) weatherIMG=sunCloudRainImg
  if (str.search(/storms/i)>=0) weatherIMG=stormImg

  return(
    <div>
      <img src={weatherIMG} className={styles.weatherImg}/>
    </div>
  )
}

let dateFunc = (dateStr) => {
    const dataTime = new Date(
      dateStr.slice(0, 4), 
      dateStr.slice(5, 7)-1, 
      dateStr.slice(8, 10)
    )

  return <div className={styles.date}>
    {dataTime.toDateString()}
  </div>
}

let Day = ({day}) => {
  return(
    <div className={styles.coverDays}>
      <div className={styles.dayInWeek}>
        <div>
          {dateFunc(day.Date)}
        </div>
        <div className={styles.dayNighth}>
          <div>Day: {day.Day.IconPhrase}</div>
          <div>Night: {day.Night.IconPhrase}</div>
        </div>

        {chooseIMG(day.Day.IconPhrase)}
        <div className={styles.temp}>
          <div>max {convertToCels(day.Temperature.Maximum.Value)} C</div>
          <div>min {convertToCels(day.Temperature.Minimum.Value)} C</div>
        </div>
      </div>
    </div>
  )
}

export default Day