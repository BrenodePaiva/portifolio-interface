import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #23242a;
`

const animate = keyframes`
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const Box = styled.div`
  position: relative;
  width: 380px;
  height: 430px;
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${animate} 6s linear infinite;
  }
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #45f3ff,
      #45f3ff,
      #45f3ff
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${animate} 6s linear infinite;
    animation-delay: -3s;

    form {
      position: absolute;
      inset: 4px;
      background: #222;
      padding: 50px 40px;
      border-radius: 8px;
      z-index: 2;
      display: flex;
      flex-direction: column;

      h2 {
        color: #fff;
        font-weight: 500;
        text-align: center;
        letter-spacing: 0.1em;
      }

      input[type='submit'] {
        border: none;
        outline: none;
        padding: 9px 25px;
        background: #fff;
        cursor: pointer;
        font-size: 0.9em;
        border-radius: 4px;
        font-weight: 600;
        width: 100px;
        margin-top: 10px;
      }
      input[type='submit']:active {
        opacity: 0.8;
      }
    }
  }
`

export const BorderLine = styled.span`
  position: absolute;
  top: 0;
  inset: 0;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #ff2770,
      #ff2770,
      #ff2770
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${animate} 6s linear infinite;
    animation-delay: -1.5s;
  }
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 380px;
    height: 420px;
    background: linear-gradient(
      0deg,
      transparent,
      transparent,
      #ff2770,
      #ff2770,
      #ff2770
    );
    z-index: 1;
    transform-origin: bottom right;
    animation: ${animate} 6s linear infinite;
    animation-delay: -4.5s;
  }
`

export const Form = styled.form`
  position: absolute;
  inset: 4px;
  background: #222;
  padding: 50px 40px;
  border-radius: 8px;
  z-index: 2;
  display: flex;
  flex-direction: column;

  h2 {
    color: #fff;
    font-weight: 500;
    text-align: center;
    letter-spacing: 0.1em;
  }

  input[type='submit'] {
    border: none;
    outline: none;
    padding: 9px 25px;
    background: #fff;
    cursor: pointer;
    font-size: 0.9em;
    border-radius: 4px;
    font-weight: 600;
    width: 100px;
    margin-top: 10px;
  }
  input[type='submit']:active {
    opacity: 0.8;
  }
`

export const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 35px;

  input {
    position: relative;
    width: 100%;
    padding: 20px 10px 10px;
    background: transparent;
    outline: none;
    border: none;
    box-shadow: none;
    color: #23242a;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    z-index: 10;
  }
  span {
    position: absolute;
    left: 0;
    padding: 20px 0px 10px;
    pointer-events: none;
    color: #8f8f8f;
    font-size: 1em;
    letter-spacing: 0.05em;
    transition: 0.5s;
  }
  input:valid ~ span,
  input:focus ~ span {
    color: #fff;
    font-size: 0.75em;
    transform: translateY(-34px);
  }
  i {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
    transition: 0.5s;
    pointer-events: none;
  }
  input:valid ~ i,
  input:focus ~ i {
    height: 40px;
  }
`

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
