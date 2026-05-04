import PropTypes from 'prop-types'
import { InputBox } from './styled'

export function InputForm({ children, ...props }) {
  return (
    <InputBox {...props}>
      {children} <i></i>
    </InputBox>
  )
}

InputForm.propTypes = {
  children: PropTypes.array
}
