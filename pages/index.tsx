import Head from 'next/head'
import Main from '../components/main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Currency</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  )
}