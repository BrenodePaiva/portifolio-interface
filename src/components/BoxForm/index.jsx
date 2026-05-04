import PropTypes from 'prop-types'
import { BorderLine, Box, Container } from './styled'

export function BoxForm({ children, ...props }) {
  return (
    <Container {...props}>
      <Box {...props}>
        <BorderLine {...props} />
        {children}
      </Box>
    </Container>
  )
}

BoxForm.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}
