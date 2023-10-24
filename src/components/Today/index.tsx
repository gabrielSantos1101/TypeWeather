import dayjs from 'dayjs'
import './styles.css'

import { CityProps } from '../../services/getCityByNameService'
import { WeatherResponseProps } from '../../services/getWeatherByCity'
import { isDayTime } from '../../utils/isDayTime'
import { Logo } from '../Logo'
import { SelectCity } from '../SelectCity'
import { WeatherTime } from '../WeatherTime'

interface Props {
  city: string
  weather: WeatherResponseProps
  onSearchValue: (value: CityProps) => void
}

export function Today({ city, weather, onSearchValue }: Props) {
  const today = dayjs(new Date()).format('dddd, DD [de] MMMM [de] YYYY')
  const isDay = isDayTime()

  const bgImg = isDay ? weather.details.bg_day : weather.details.bg_night

  return (
    <section className="today">
      <form>
        <Logo />
        <SelectCity onSelect={onSearchValue} />
      </form>

      <div
        className="today-details"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <header>
          <h3>{city}</h3>
          <p>{today}</p>
        </header>

        <footer>
          <h1>{weather?.temp}ºc</h1>
          {/* <img src={icon} alt="Tempo" /> */}
          <WeatherTime type={weather.description} isDay={isDay} />
        </footer>

        <p>
          {weather?.temp_min}ºc / {weather?.temp_max}ºc <span>&#8226;</span>{' '}
          {weather.description}
        </p>
      </div>
    </section>
  )
}
