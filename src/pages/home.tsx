import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Button from '@components/Button/Button'
import FloatingButton from '@components/Button/FloatingButton'
// import SendIcon from '@assets/icons/send.svg'
import { getBaseInfo, PersonalDataSelector } from '@store/index'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const { data, pending, error } = useAppSelector(PersonalDataSelector)

  useEffect(() => {
    dispatch(getBaseInfo())
  }, [])

  return (
    <div className="container container-full-page">
      Home page <span>Teste</span>
      <p>{data?.description}</p>
      <h1>Teste 1</h1>
      <Button onClick={() => {}}>
        <span>Send</span>
        {/* <SendIcon /> */}
      </Button>
      <Button onClick={() => {}} type="primary">
        <span>Send</span>
        {/* <SendIcon /> */}
      </Button>
    </div>
  )
}

export default Home
