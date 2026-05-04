import styled from 'styled-components'

export const SerachBox = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 11px;
  height: 58px;

  form {
    position: relative;
  }

  .search-icon {
    position: absolute;
    top: 6px;
    left: 7px;
    cursor: pointer;
  }

  input {
    padding: 8px;
    padding-left: 31px;
    border-radius: 12px;
    font-size: 14px;
    background-color: rgba(246, 247, 248, 0.6);
    color: rgb(48, 55, 65);
    border: 1px solid rgb(223, 226, 231);
    transition: 0.15s;
    outline: rgb(48, 55, 65) dashed 0px;
    outline-offset: 0px;
    box-shadow:
      rgb(255, 255, 255) 0px 1px 0px 0px inset,
      rgba(232, 234, 238, 0.4) 0px -1px 0px 0px inset,
      rgba(223, 226, 231, 0.5) 0px 1px 2px 0px;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  margin-left: 20px;
  transition: 0.5s linear;
  /* border: none; */
  border-radius: 6px;
  background: #565656;
  color: #fff;
  cursor: pointer;

  &:active {
    border: none;
    background: #000;
  }
`

export const Image = styled.img`
  width: 150px;
`

export const BoxIcon = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`
export const Description = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
