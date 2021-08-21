import styled from 'styled-components'

export const Container = styled.h1`
  color: ${({ theme }) => theme.color.primary};
  font-size: var(--text-large);
  font-weight: bold;
`
