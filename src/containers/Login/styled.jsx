import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const LinksBox = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const LinksStyled = styled(Link)`
  margin: 10px 0;
  font-size: 0.75em;
  color: #8f8f8f;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`
