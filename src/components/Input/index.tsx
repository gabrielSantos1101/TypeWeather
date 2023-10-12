import { Spin } from '../Spin'
import './styles.css'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean
}

export function Input({ isLoading = false, ...rest }: InputProps) {
  return (
    <div className="input">
      <input type="text" {...rest} />

      {isLoading && <Spin />}
    </div>
  )
}
