import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  border: none;
  background-color: ${({ theme }) => theme.background.quaternary};
  color: ${({ theme }) => theme.color.primary};
  text-align: center;
  display: inline-block;
  border-radius: 50%;
  align-items: center;
  bottom: var(--spacing-medium);
  right: var(--spacing-medium);

  display: flex;
  position: fixed;
  width: 50px;
  height: 50px;
  justify-content: center;
  z-index: 1000;
  cursor: pointer;

  svg {
    height: 16px;
    width: auto;
  }
`
