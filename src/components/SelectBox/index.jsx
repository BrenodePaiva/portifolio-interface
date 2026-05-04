import PropTypes from 'prop-types'
import { SelectContent } from './styled'

export function SelectBox({ children, ...props }) {
  return <SelectContent {...props}>{children}</SelectContent>
}

SelectBox.propTypes = {
  children: PropTypes.object
}
