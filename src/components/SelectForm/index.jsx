import PropTypes from 'prop-types'
import { Container } from './styled'

export function SelectForm({ children, ...props }) {
  return <Container {...props}>{children}</Container>
}

SelectForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
