import styled from 'styled-components'

export const LabelFile = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 215px;
  margin-top: 30px;
  background-color: #3b3c47;
  color: white;
  font-size: 14px;
  padding: 6px 16px;
  border: ${props => (props['data-err'] ? '1px solid #cc1717' : '')};
  border-radius: 10px;
  cursor: pointer;

  input[type='file'] {
    opacity: 0;
    pointer-events: none;
    position: absolute;
  }

  p {
    width: 100%; /* Define a largura */
    white-space: nowrap; /* Impede quebra de linha */
    overflow: hidden; /* Oculta o excesso */
    text-overflow: ellipsis; /* Adiciona "..." ao final */
  }
`
