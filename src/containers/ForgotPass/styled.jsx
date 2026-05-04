import styled from 'styled-components'

export const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`

export const LabelFile = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 160px;
  margin-top: 20px;
  background-color: #3b3c47;
  color: white;
  font-size: 14px;
  padding: 6px 16px;
  border-radius: 10px;
  margin-top: 10px;
  cursor: pointer;

  p {
    width: 100%; /* Define a largura */
    white-space: nowrap; /* Impede quebra de linha */
    overflow: hidden; /* Oculta o excesso */
    text-overflow: ellipsis; /* Adiciona "..." ao final */
  }
`
