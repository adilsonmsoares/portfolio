import React from 'react'

import { Button } from '@styles/components/Button/FloatingButton'

type Props = {
  onClick: () => void
}

const FloatingButton: React.FC<Props> = ({ onClick, children, ...props }) => {
  return (
    <Button className="shadow" onClick={onClick} {...props}>
      {children}
    </Button>
  )
}

export default FloatingButton
