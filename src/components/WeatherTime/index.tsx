interface WeatherProps extends React.HTMLAttributes<HTMLDivElement> {
  type: string
}

export function WeatherTime({ type, ...rest }: WeatherProps) {
  return (
    <div className="container" {...rest}>
      {type === 'sunny' && <div className="sunny"></div>}
      {type === 'nublado' && <div className="cloudy"></div>}
      {type === 'rainy' && <div className="rainy"></div>}
      {type === 'snowy' && <div className="snowy"></div>}
      {type === 'rainbow' && <div className="rainbow"></div>}
      {type === 'starry' && <div className="starry"></div>}
      {type === 'stormy' && <div className="stormy"></div>}
    </div>
  )
}
