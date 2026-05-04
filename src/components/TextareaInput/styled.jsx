import { TextareaAutosize } from '@mui/material'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;

  .text-area {
    width: 100%;
    height: 90px;
    padding: 10px 5px;
    border: ${props =>
      props['data-err'] ? '1px solid #cc1717' : '2px solid #ccc'};
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 14px;
  }
`
