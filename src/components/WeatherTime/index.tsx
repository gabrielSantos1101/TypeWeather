import { isDayTime } from '../../utils/isDayTime'

interface WeatherProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string
}

export function WeatherTime({ type, ...rest }: WeatherProps) {
  const isDay = isDayTime()
  return (
    <div className="container" {...rest}>
      {type === 'céu limpo' && isDay && <div className="sunny"></div>}
      {(type === 'nublado' ||
        type === 'nuvens dispersas' ||
        type === 'algumas nuvens') && <div className="cloudy"></div>}
      {(type === 'chuva leve' ||
        type === 'chuva moderada' ||
        type === 'chuva pesada') && <div className="rainy"></div>}
      {type === 'nevando' && <div className="snowy"></div>}
      {type === 'rainbow' && <div className="rainbow"></div>}
      {type === 'céu limpo' && !isDay && <div className="starry"></div>}
      {type === 'chuva forte' && <div className="stormy"></div>}
    </div>
  )
}
