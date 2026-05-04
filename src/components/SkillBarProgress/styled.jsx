import styled from 'styled-components'

export const SkillBox = styled.div`
  width: 100%;
`

export const Title = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 600;
`

export const SkillBar = styled.div`
  width: 100%;
  height: 8px;
  margin-bottom: 50px;
  border-radius: 6px;
  background: rgba(64, 112, 244, 0.2);

  .SkillPer {
    position: relative;
    display: block;
    height: 100%;
    border-radius: 6px;
    background: #4070f4;
    transition: all linear 0.1s;
  }
`

export const SkillPer = styled.span`
  position: relative;
  display: block;
  height: 100%;
  width: ${props => props.progress};
  border-radius: 6px;
  background: #4070f4;
  transition: all linear 20ms;
`

export const Tooltip = styled.span`
  position: absolute;
  right: -14px;
  top: -28px;
  font-size: 9px;
  font-weight: 500;
  color: #fff;
  padding: 2px 6px;
  border-radius: 3px;
  background: #4070f4;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -2px;
    height: 10px;
    width: 10px;
    z-index: -1;
    background: #4070f4;
    transform: translateX(-50%) rotate(45deg);
  }
`
