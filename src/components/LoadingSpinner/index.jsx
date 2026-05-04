import { Container } from './styled'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

export function LoadingSpinner({ size }) {
  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress
          size={size}
          style={{ color: 'rgb(86 86 86 / 62%)' }}
        />
      </Box>
    </Container>
  )
}

LoadingSpinner.propTypes = {
  size: PropTypes.number
}
