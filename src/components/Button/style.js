import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`

export const Button = styled.button`
  outline: none;
  border: none;

  font-size: ${({ theme }) => theme.fontSizes.title};
  ${({ theme }) => theme.common.flexCenter}

  /* background-color: ${({ theme }) => theme.palette.orange}; */
  background-color: ${({ isClicked }) => (isClicked ? 'red' : 'blue')};
  border-radius: 10px;
  color: white;
  width: 200px;
  margin: 10px;
  animation: ${fadeIn} 1s ease-out;
  font-family: 'BlackHanSans';
`
