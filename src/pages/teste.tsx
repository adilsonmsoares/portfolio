import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '@styles/Home.module.scss'
import React, { useState } from 'react'
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
import { route } from 'next/dist/server/router'

const Teste: NextPage = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector(countSelector)
  const [incrementAmount, setIncrementAmount] = useState<number>(0)
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector)
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to NextJs Boilerplate</h1>

        <p className={styles.description}>
          Here you have a some features implemented and some examples of what
          they can do
          <br />
          <code className={styles.code}>Enjoy it!</code>
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h2>Counter Redux &rarr;</h2>
            <p>Value: {count}</p>
            <input
              value={incrementAmount}
              onChange={e => setIncrementAmount(Number(e.target.value))}
              type="number"
            />
            <Button onClick={() => dispatch(decrement())}>Decrement</Button>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Button
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount)))
              }
            >
              Increment by amount
            </Button>
            <Button
              onClick={() => dispatch(incrementByAmount(Number(count * -1)))}
              disabled={pending}
            >
              Reset
            </Button>
          </div>
          <div className={styles.card}>
            <h2>Fetch Redux &rarr;</h2>
            <div>
              <p>Generate random Kanye West quote</p>
              {pending && <span>Loading...</span>}
              {data && <span>{data.quote}</span>}
              {error && <span>Oops, something went wrong</span>}
              <br />
              <Button
                onClick={() => dispatch(getKanyeQuote())}
                disabled={pending}
              >
                Generate Kanye Quote
              </Button>
            </div>
          </div>

          <div className={styles.card}>
            <Button onClick={router.back}>
              <h2>&larr;Navigation</h2>
              <p>Click here to navigate back</p>
            </Button>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Teste
