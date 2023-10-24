interface WeatherProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string
  isDay: boolean
}

export function WeatherTime({ type, isDay, ...rest }: WeatherProps) {
  return (
    <div className="container" {...rest}>
      {type === 'céu limpo' && isDay && <div className="sunny"></div>}
      {(type === 'nublado' ||
        type === 'nuvens dispersas' ||
        type === 'algumas nuvens') && <div className="cloudy"></div>}
      {(type === 'chuva leve' ||
        type === 'chuva moderada' ||
        type === 'chuva pesada') && <div className="rainy"></div>}
      {type === 'snowy' && <div className="snowy"></div>}
      {type === 'rainbow' && <div className="rainbow"></div>}
      {type === 'céu limpo' && !isDay && <div className="starry"></div>}
      {type === 'chuva forte' && <div className="stormy"></div>}
    </div>
  )
}
