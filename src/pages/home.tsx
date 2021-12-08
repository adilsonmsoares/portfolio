import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Button from '@components/Button/Button'
import SendIcon from '@assets/icons/send.svg'
import {
  decrement,
  increment,
  incrementByAmount,
  countSelector,
  getKanyeQuote,
  kanyeQuoteSelector
} from '@store/index'

const Home: NextPage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(countSelector)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector)

  return (
    <div>
      Home page <span>Teste</span>
      <p>Teste 2</p>
      <h1>Teste 1</h1>
      <Button onClick={() => {}}>
        Send
        <SendIcon />
      </Button>
    </div>
  )
}

export default Home
