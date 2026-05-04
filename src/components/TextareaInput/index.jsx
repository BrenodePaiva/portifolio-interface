import PropTypes from 'prop-types'
import { Container } from './styled'

export function TextareaInput({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

TextareaInput.propTypes = {
  children: PropTypes.object
}
