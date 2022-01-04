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
import { getBaseInfo, PersonalDataSelector } from '@store/index'
import { ContactData } from '@shared/types'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector(PersonalDataSelector)

  useEffect(() => {
    dispatch(getBaseInfo())
  }, [])

  let getContactsIcons = (contacts: ContactData) => {
    {
      Object.keys(data.contacts).map((key, index) => (
        <a href={data.contacts[key]}></a>
      ))
    }
  }

  return (
    <div
      className={['container container-full-page', styles['home-page']].join(
        ' '
      )}
    >
      {pending ? (
        'loading'
      ) : (
        <>
          <div className="typhography typhography-title">{data.title}</div>
          <div className="typhography typhography-subtitle">
            {data.subtitle}
          </div>
          <br />
          <div>{data.description}</div>
          <br />
          <div className={styles.contacts}>
            {Object.keys(data.contacts).map((key, index) => (
              <a href={data.contacts[key]} target="_blank">
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
        </>
      )}
    </div>
  )
}

export default Home
