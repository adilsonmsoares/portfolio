import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: fixed;
  padding-top: var(--spacing-small);
  padding-bottom: var(--spacing-small);
  top: 0;
  font-weight: bold;
  background-color: ${({ theme }) => theme.background.primary};

  .header__logo * {
    fill: ${({ theme }) => theme.color.primary};
    width: auto;
    height: 36px;
  }

  .header__nav a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.secondary};
  }

  .header__nav a:hover {
    color: ${({ theme }) => theme.color.primary};
  }

  .header__nav a:not(:first-child) {
    padding-left: var(--spacing-small);
  }

  .header__nav .active {
    color: ${({ theme }) => theme.color.primary};
  }
`
