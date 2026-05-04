import styled, { keyframes } from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props['data-background'] ? '#23242a' : '')};

  form {
    position: absolute;
    inset: 4px;
    background: #222;
    padding: 40px 40px;
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

    .text {
      margin: auto;
      padding: 20px;
      color: #fff;
    }

    input[type='submit'] {
      border: none;
      outline: none;
      padding: 9px 20px;
      background: #fff;
      cursor: pointer;
      font-size: 0.9em;
      border-radius: 4px;
      font-weight: 600;
      width: 100px;
      margin-top: 40px;
    }
    input[type='submit']:active {
      opacity: 0.8;
    }
  }
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
  width: ${props => (props.width ? props.width : '380px')};
  height: calc(${props => (props.height ? props.height : '420px')} + 10px);
  background: #1c1c1c;
  border-radius: 8px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: ${props => (props.width ? props.width : '380px')};
    height: ${props => (props.height ? props.height : '420px')};
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
    width: ${props => (props.width ? props.width : '380px')};
    height: ${props => (props.height ? props.height : '420px')};
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
    width: ${props => (props.width ? props.width : '380px')};
    height: ${props => (props.height ? props.height : '420px')};
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
    width: ${props => (props.width ? props.width : '380px')};
    height: ${props => (props.height ? props.height : '420px')};
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
