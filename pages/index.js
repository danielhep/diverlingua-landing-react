import Head from 'next/head'
import Section from '../components/HomeSection'
import Image from 'next/image'

import edificios from '../public/images/edificios2.svg'
// import styles from '../styles/Home.module.css'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Learn Spanish</title>
      </Head>
      <header />
      <main>
        <div className='bg-diverlingua-light-blue w-full relative'>
          <div className='relative w-full flex flex-col justify-center items-center max-w-screen-xl m-auto'>
            <Section textSide='right' style={{ marginBottom: '-300px' }}>
              <h2 className='text-6xl text-white font-bold leading-normal mr-24'>
                <span>Learn Spanish</span><br />
                <span className='ml-12'>from anywhere.</span>
              </h2>
            </Section>
            <Image src={edificios} alt='' layout='intrinsic' />
          </div>
        </div>
      </main>
      <footer />
    </div>
  )
}
