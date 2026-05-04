import PropTypes from 'prop-types'
import { Text } from './styled'

export function ErrorMessage({ children }) {
  return <Text>{children}</Text>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
