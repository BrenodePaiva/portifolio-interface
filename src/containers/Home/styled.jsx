import { GitHub, LinkedIn } from '@mui/icons-material'
import EmailIcon from '@mui/icons-material/Email'
import PersonIcon from '@mui/icons-material/Person'
import styled, { keyframes } from 'styled-components'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import breakPoints from '../../styles/breakPoints'
import { Link } from 'react-router-dom'

export const HeaderPage = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 65px;
  padding: 0px 10%;
  background: #11141a;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;

  @media ${breakPoints.bigPlus} {
    padding: 0 5%;
  }
`
export const LeftPage = styled.div``

export const NavPage = styled.nav`
  height: 65px;
  position: relative;
  display: flex;
  align-items: center;

  a {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    margin-left: 30px;
    /* padding: 0 23px; */
    transition: 0.3s;
    z-index: 1;
  }
  span {
    position: absolute;
    top: 0;
    left: 10px;
    width: 95px;
    height: 100%;
    background: linear-gradient(45deg, #070160, #00caff);
    border-radius: 8px;
    transition: 0.5s;
  }
  a:nth-child(1).active ~ span {
    left: 10px;
    width: 88px;
  }
  a:nth-child(2).active ~ span {
    left: 92px;
    width: 87px;
  }
  a:nth-child(3).active ~ span {
    left: 184px;
    width: 92px;
  }
  a:nth-child(4).active ~ span {
    left: 282px;
    width: 105px;
  }

  /* a:hover {
    color: #0ef;
    #070160
    #0e03c4
    #00caff
    #4f1919
    #ff3333
  } */

  /* .active {
    color: #0ef;
  } */

  @media ${breakPoints.Xbig} {
    position: fixed;
    top: 65px;
    right: ${props => (props.open ? '0px' : '-300px')};
    height: 100vh;
    width: 300px;
    padding-top: 15px;
    background: #11141a;
    flex-direction: column;
    gap: 26px;
    transition: 0.4s ease-in-out;

    span {
      top: 0;
      left: 0;
      width: 100%;
      height: 50px;
      border-radius: 0px;
    }
    a:nth-child(1).active ~ span {
      left: 0;
      width: 100%;
    }
    a:nth-child(2).active ~ span {
      left: 0;
      width: 100%;
      top: 47px;
    }
    a:nth-child(3).active ~ span {
      left: 0;
      width: 100%;
      top: 96px;
    }
    a:nth-child(4).active ~ span {
      left: 0;
      width: 100%;
      top: 146px;
    }
  }
`

export const NavMobile = styled.div`
  cursor: pointer;
  display: none;

  @media ${breakPoints.Xbig} {
    display: block;

    div {
      width: 2rem;
      height: 0.2rem;
      margin: 0.4rem 0;
      background: #fff;
      transition: 0.4s ease-in-out;
    }
    ${props =>
      props['data-is-toggle'] &&
      `
        .line1 {
          transform: rotate(-45deg) translate(-6px, 10px);
        }
        .line2 {
          opacity: 0;
        }
        .line3 {
          transform: rotate(45deg) translate(-3px, -7px);
        } 
    `}
  }
`

export const Section = styled.section`
  padding: 0 10%;
  min-height: 100vh;
  display: flex;
  background: #1f242d;
  color: #fff;

  &:nth-child(odd) {
    background: #323946;
  }

  @media ${breakPoints.bigPlus} {
    padding: 0 5%;
  }
`

export const Container = styled.div`
  h2 {
    font-size: 37px;
  }
  #home {
    /* justify-content: space-between; */
    /* align-items: center; */

    h3 {
      font-size: 50px;
      font-weight: 600;
    }
    h4 {
      font-size: 30px;
      font-weight: 500;
      margin-bottom: 20px;
    }
    p {
      font-size: 22px;
    }
  }
  #about {
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
    padding-bottom: 60px;
  }
  #projects {
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
  }
  #contact {
    align-items: center;
    flex-direction: column;
    padding-top: 60px;
  }
`

export const BoxHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .text-home {
    width: 80%;

    a {
      text-decoration: none;
      color: #fff;
      cursor: auto;
    }
  }
`

export const SocialHome = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  width: 80%;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 80%; */
    padding: 6px;
    border: 1px solid #fff;
    border-radius: 50%;
    cursor: pointer;
    transition:
      border-color 0.2s ease-in-out,
      color 0.2s ease-in-out;

    &:hover {
      border-color: #4070f4;
      color: #4070f4;
    }
  }
`

export const LinkSocial = styled(Link)`
  color: #fff;
`

export const LinkedinStyled = styled(LinkedIn)`
  font-size: 22px;
`
export const GitHubStyled = styled(GitHub)`
  font-size: 22px;
`

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-top: 38px;

  @media ${breakPoints.big} {
    grid-template-columns: 1fr;
  }
`

export const BoxAbout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 60px;

  img {
    border-radius: 50%;
    width: 230px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  p {
    padding: 20px 10px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    text-align: justify;
    overflow-wrap: break-word;
    hyphens: auto;
    -webkit-hyphens: auto;
  }
`

export const ProgreBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const CategoryMenu = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 60px;

  @media ${breakPoints.medium} {
    gap: 20px;
  }
`

export const CategoryButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  border-bottom: ${props =>
    props['data-is-active']
      ? '2px solid #4070f4'
      : '2px solid rgba(0, 0, 0, 0)'};
  color: ${props => (props['data-is-active'] ? '#4070f4' : '#9a9a9d')};
  font-size: 17px;
  padding-bottom: 5px;
  transition:
    border 0.2s linear,
    color 0.2s linear;
`

export const ServiceSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  margin-top: 60px;
  padding-bottom: 60px;
`

export const ContentProject = styled.ul`
  width: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;

  li {
    display: flex;
  }
`

export const BoxProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

  img {
    max-height: 280px;
  }
`

export const TextProjetc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 10px 70px 10px;

  p {
    text-align: justify;
    text-justify: inter-word;
    overflow-wrap: break-word;
    hyphens: auto;
    -webkit-hyphens: auto;
  }
`
const move = keyframes`
  0%{margin-left: 0}
  50%{margin-left: 20px}
  100%{margin-left: 0}
`

export const LinkStyled = styled(Link)`
  position: absolute;
  bottom: 5px;
  width: 166px;
  padding: 5px 0px 5px 15px;
  margin: 10px 2px;
  text-decoration: none;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 5px;
  border: 1px solid #4070f4;
  border-radius: 20px;
  transition: all 0.2s linear;
  color: #4070f4;

  &:active {
    background-color: #4070f4;
    color: #fff;
    transition: all 0s linear;
  }
  &:hover {
    background-color: #4070f4;
    color: #fff;
  }
`

export const ArraowStyled = styled(KeyboardDoubleArrowRightIcon)`
  animation: ${move} 2s linear infinite;
`

export const PaginationBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div,
  button {
    color: #fff;
  }
`

export const ContactSection = styled.div`
  margin-top: 60px;
  padding-bottom: 60px;

  @media ${breakPoints.big} {
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`

export const InputBox = styled.div`
  position: relative;
  box-shadow: 10px 10px 31px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 31px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 31px -6px rgba(0, 0, 0, 0.75);
`

export const Input = styled.input`
  padding: 12px 30px;
  width: 600px;
  height: 54px;
  border-radius: 8px;

  @media ${breakPoints.big} {
    width: 100%;
  }
`

export const YouName = styled(PersonIcon)`
  position: absolute;
  top: 26%;
  left: 3px;
  color: #4070f4;
`

export const YouEmail = styled(EmailIcon)`
  position: absolute;
  top: 26%;
  left: 3px;
  color: #4070f4;
`

export const TexteArea = styled.textarea`
  padding: 12px 16px;
  width: 600px;
  height: 150px;
  border-radius: 8px;
  box-shadow: 10px 10px 31px -6px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 31px -6px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 31px -6px rgba(0, 0, 0, 0.75);

  @media ${breakPoints.big} {
    width: 100%;
  }
`

export const Button = styled.button`
  height: 54px;
  border-radius: 24px;
  cursor: pointer;
`
