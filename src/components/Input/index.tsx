import { Spin } from '../Spin'
import './styles.css'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
}

export function Input({ isLoading = false, ...rest }: Props) {
  return (
    <div className="input">
      <input type="text" {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}
