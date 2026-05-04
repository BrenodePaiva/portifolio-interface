import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 30px;

  .select-box {
    border: ${props => (props['data-err'] ? '1px solid #cc1717' : '')};
    border-radius: 4px;
  }
`
