import React from 'react'

import { Container } from '@styles/components/Button/FloatingButton'

type Props = {
  onClick: () => void
}

const Button: React.FC<Props> = ({ onClick, children, ...props }) => {
  return (
    <Container className="shadow" onClick={onClick} {...props}>
      {children}
    </Container>
  )
}

export default Button
