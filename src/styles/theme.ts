import { Theme } from '../shared/types'

export const darkTheme: Theme = {
  background: {
    primary: 'var(--black-evil)',
    secondary: 'var(--black-light)',
    tertiary: 'var(--blue)',
    quaternary: 'var(--black-light)'
  },
  border: {
    primary: 'var(--black)'
  },
  color: {
    primary: 'var(--white)',
    secondary: 'var(--white-grey)',
    tertiary: 'var(--white)',
    quaternary: 'var(--white-grey)'
  },
  shadow: {
    primary: 'var(--black)'
  }
}

export const lightTheme: Theme = {
  background: {
    primary: 'var(--white-smoke)',
    secondary: 'var(--white-smoke)',
    tertiary: 'var(--blue)',
    quaternary: 'var(--white-smoke)'
  },
  border: {
    primary: 'var(--grey)'
  },
  color: {
    primary: 'var(--black)',
    secondary: 'var(--black-grey)',
    tertiary: 'var(--white)',
    quaternary: 'var(--black-grey)'
  },
  shadow: {
    primary: 'var(--grey-dark)'
  }
}
