import { NextDaysItem, NextDaysItemProps } from '../NextDaysItem'
import './styles.css'

interface Props {
  data: NextDaysItemProps[]
}

export function NextDays({ data }: Props) {
  return (
    <section className="next-days">
      <h1>Previsão para 5 dias</h1>

      <div className="next-next-detail">
        {data.map((item) => (
          <NextDaysItem key={item.day} data={item} />
        ))}
      </div>
    </section>
  )
}
