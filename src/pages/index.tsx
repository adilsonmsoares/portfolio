import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import BulbIcon from '@assets/icons/bulb.svg'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Button from '@components/Button/Button'
import {
  decrement,
  increment,
  incrementByAmount,
  countSelector,
  getKanyeQuote,
  kanyeQuoteSelector
} from '@store/index'

const Index: NextPage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(countSelector)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector)

  return <div>Pagina index</div>
}

export default Index
