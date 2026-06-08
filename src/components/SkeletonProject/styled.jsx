import styled from 'styled-components'

export const BoxProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 300px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`

export const TextProjetc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 10px 70px 10px;
`

export const ButtonContent = styled.div`
  position: absolute;
  bottom: 5px;
  padding: 5px 0px 5px 15px;
  margin: 10px 2px;
  gap: 5px;

  .MuiSkeleton-root {
    border-radius: 20px;
  }
`