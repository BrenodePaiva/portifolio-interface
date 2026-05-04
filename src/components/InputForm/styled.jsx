import styled from 'styled-components'

export const InputBox = styled.div`
  position: relative;
  width: 300px;
  margin-top: 30px;

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
    border: ${props => (props['data-err'] ? 'solid 1px #cc1717' : 'none')};
    overflow: hidden;
    transition: 0.5s;
    pointer-events: none;
  }
  input:valid ~ i,
  input:focus ~ i {
    height: 40px;
  }
`
