import styles from '@styles/components/Button.module.scss'
import Link from 'next/link'
import React from 'react'

type Props = {
  htmlElement: 'button' | 'a' | 'div'
  type: 'default' | 'circular'
  color?: 'primary'
  textStrong?: boolean
  textUpper?: boolean
  roundedCorner?: boolean
  disabled?: boolean
  hidden?: boolean
  href?: string
  className?: string
  onClick?: () => void
}

const Button: React.FC<Props> = ({
  htmlElement,
  type,
  color,
  textStrong,
  textUpper,
  disabled,
  hidden,
  roundedCorner,
  href,
  className,
  onClick,
  children
}) => {
  const isExternal = (url: string) => {
    return url.startsWith('http') || url.startsWith('https')
  }

  var classNames = [
    styles.btn,
    type && styles[`btn-${type}`],
    hidden && styles[`btn--hidden`],
    disabled && styles[`btn--disabled`],
    roundedCorner && styles[`btn--rounded`],
    textStrong && styles[`btn--strong`],
    textUpper && styles[`btn--upper`],
    color && styles[`btn-${type}--${color}`],
    className
  ].join(' ')

  return htmlElement === 'button' ? (
    <button className={classNames} {...{ onClick, disabled }}>
      {children}
    </button>
  ) : htmlElement === 'a' ? (
    <Link href={href || ''}>
      <a className={classNames} target={isExternal(href || '') ? '_blank' : ''}>
        {children}
      </a>
    </Link>
  ) : (
    <div className={classNames} {...{ onClick }}>
      {children}
    </div>
  )
}

Button.defaultProps = {
  htmlElement: 'button',
  type: 'default',
  color: 'primary'
}

export default Button
