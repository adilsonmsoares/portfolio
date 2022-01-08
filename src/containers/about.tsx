import type { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import styles from '@styles/containers/About.module.scss'
import useData from '@hooks/useData'
import { AboutData } from '@shared/types'

const About: NextPage = () => {
  const data = useData<AboutData>('about.json')

  return (
    <section
      className={['container', styles['about-container']].join(' ')}
      id="aboutme"
    >
      <div className="typhography typhography-title typhography-header">
        About Me
      </div>
      <div className={styles.description}>
        {data.description.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>
    </section>
  )
}

export default About
