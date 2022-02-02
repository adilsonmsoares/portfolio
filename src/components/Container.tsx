import React from 'react'

type Props = {
  sectionId: string
  page?: boolean
  fullScreen?: boolean
  className?: string
}

const Container: React.FC<Props> = ({
  children,
  sectionId,
  page,
  fullScreen,
  className
}) => {
  var classNames = [
    'container',
    page && 'container-page',
    fullScreen && 'container-full-screen',
    className
  ].join(' ')

  return (
    <section className={classNames} id={sectionId}>
      {children}
    </section>
  )
}

export default Container
