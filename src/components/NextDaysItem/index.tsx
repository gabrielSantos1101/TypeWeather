import { WeatherTime } from '../WeatherTime'
import './styles.css'

export type NextDaysItemProps = {
  day: string
  icon: string
  weather: string
  min: number
  max: number
}
type Props = {
  data: NextDaysItemProps
}

export function NextDaysItem({ data }: Props) {
  console.log(data)
  return (
    <div className="next-day-item">
      <h2>{data.day}</h2>

      <WeatherTime type={data.weather} />

      <h3>{data.weather}</h3>

      <p>
        {data.min}ºc <span>{data.max}ºc</span>
      </p>
    </div>
  )
}
