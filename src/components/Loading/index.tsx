import { Spin } from '../Spin'
import './styles.css'

export function Loading() {
  return (
    <div className="loading">
      <Spin />
    </div>
  )
}
