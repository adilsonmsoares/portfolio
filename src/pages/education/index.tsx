import type { NextPage } from 'next'
import styles from '@styles/pages/About.module.scss'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import { getBaseInfo, PersonalDataSelector } from '@store/index'

const About: NextPage = () => {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector(PersonalDataSelector)

  useEffect(() => {
    dispatch(getBaseInfo())
  }, [])

  return (
    <section
      className={['container container-page', styles['about-page']].join(' ')}
      id="education"
    >
      <div className="typhography typhography-title typhography-header">
        Education
      </div>
    </section>
  )
}

export default About
