import styled from 'styled-components'

export const SelectContent = styled.div`
  border: ${props => (props.err ? '1px solid #cc1717' : '')};
  border-radius: 4px;
`
