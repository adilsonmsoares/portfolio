import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/pages/Home.module.scss'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Button from '@components/Button/Button'
import FloatingButton from '@components/Button/FloatingButton'
import TwitterIcon from '@assets/icons/twitter.svg'
import LinkedinIcon from '@assets/icons/linkedin.svg'
import GitHub from '@assets/icons/github.svg'
import ArrowDownIcon from '@assets/icons/arrowDown.svg'
import { getBaseInfo, PersonalDataSelector } from '@store/index'
import { ContactData } from '@shared/types'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector(PersonalDataSelector)

  useEffect(() => {
    dispatch(getBaseInfo())
  }, [])

  return (
    <div
      className={['container container-full-screen', styles['home-page']].join(
        ' '
      )}
    >
      {pending ? (
        'loading'
      ) : (
        <>
          <div className={styles.main}>
            <div className={styles.header}>
              <div className="typhography typhography-title">{data.title}</div>
              <div className="typhography typhography-subtitle">
                {data.subtitle}
              </div>
            </div>
            <div className={styles.description}>{data.description}</div>
            <div className={styles.contacts}>
              {Object.keys(data.contacts).map((key, index) => (
                <a href={data.contacts[key]} target="_blank" key={key}>
                  {key === 'linkedin' ? (
                    <LinkedinIcon />
                  ) : key === 'twitter' ? (
                    <TwitterIcon />
                  ) : (
                    <GitHub />
                  )}
                </a>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Home
