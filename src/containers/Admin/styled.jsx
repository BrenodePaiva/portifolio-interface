import styled from 'styled-components'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  padding-left: 232px;
  min-height: 100vh;
  width: calc(100vw - 15px);
  background: #efefef;

  @media ${breakPoints.Xbig} {
    padding-left: 0px;
  }
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 100%;

  @media ${breakPoints.Xbig} {
    padding: 20px 20px 20px 70px;
  }
`
