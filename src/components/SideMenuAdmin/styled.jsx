import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoutIcon from '@mui/icons-material/Logout'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import breakPoints from '../../styles/breakPoints'

export const Container = styled.div`
  position: fixed;
  z-index: 5;
  background-color: #3c3c3c;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.15);
  width: 232px;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  transition: width 0.5s ease-in-out;

  svg {
    transition: transform 1s ease-in-out;
    color: #fff;
  }

  .warp {
    margin: 8px;
    transition: margin 0.5s ease-in-out;
  }

  .warp-arrow {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
  }

  @media ${breakPoints.Xbig} {
    width: ${props => (props['data-is-mobile'] ? '232px' : '50px')};

    .warp {
      margin-left: ${props => (props['data-is-mobile'] ? '8px' : '-300px')};
    }
  }
`

export const Line = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  border-bottom: 1px solid;
  transition: left 0.5s ease-in-out;

  @media ${breakPoints.Xbig} {
    left: ${props => (props['data-is-mobile'] ? '0' : '-300px')};
  }
`

export const ArrowIcon = styled(ArrowForwardIcon)`
  opacity: 0;
  pointer-events: none;

  @media ${breakPoints.Xbig} {
    pointer-events: all;
    cursor: pointer;
    opacity: 1;
    transform: ${props =>
      props['data-is-mobile'] ? 'rotateY(180deg)' : 'rotateY(0deg)'};
  }
`

export const UserBox = styled.div`
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
`
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;

  span {
    font-size: 12px;
    font-weight: 300;
  }
`

export const UserIconStyled = styled(AccountCircleIcon)`
  margin-right: 6px;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const LinksButton = styled(Link)`
  width: 150px;
  text-align: center;
  text-decoration: none;
  padding: 10px 15px;
  background: ${props => (props['data-is-active'] ? '#282828' : '#565656')};
  transition: 0.2s linear;
  border-radius: 6px;
  margin: 8px 8px;
  cursor: pointer;
  box-shadow: ${props =>
    props['data-is-active'] ? '0 5px #666' : '0 9px #999'};
  transform: translateY(${props => (props['data-is-active'] ? '4px' : '0')});

  &:hover {
    opacity: 0.8;
  }

  &:nth-child(2) {
    margin-top: 30px;
  }
`
export const Links = styled.span`
  font-size: 14px;
  color: #fff;
  text-decoration: none;
`

export const LogoutBox = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  position: absolute;
  bottom: 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`
export const LogoutIconStyled = styled(LogoutIcon)`
  margin-right: 6px;
  transform: rotateY(180deg);
`
