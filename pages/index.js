import Head from 'next/head'
import GenericSection from '../components/GenericSection'
import Image from 'next/image'

import edificios from '../public/images/edificios2.svg'
import imgblock1 from '../public/images/imgblock1.svg'
import imgblock2 from '../public/images/imgblock2.svg'
import imgblock3 from '../public/images/imgblock3.svg'
import imgblock4 from '../public/images/imgblock4.svg'
import Employees from '../components/Employees'
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
            <GenericSection textSide='right' style={{ marginBottom: '-300px' }}>
              <h2 className='text-6xl text-white font-bold leading-normal mr-24'>
                <span>Learn Spanish</span><br />
                <span className='ml-12'>from anywhere.</span>
              </h2>
            </GenericSection>
            <Image src={edificios} alt='' layout='intrinsic' />
          </div>
        </div>
        <GenericSection img={imgblock1} textSide='right'>
          <h3 className='text-4xl mb-4 font-bold'>
            You will learn Spanish
          </h3>
          <p className='text-2xl'>
            with native teachers who<br />adapt to your needs.
          </p>
        </GenericSection>
        <GenericSection img={imgblock2} className='bg-diverlingua-light-blue'>
          <h3 className='text-4xl mb-4 font-bold bg-diverlingua-light-blue'>
            We help you lose your<br />fear of speaking spanish.
          </h3>
          <p className='text-2xl bg-diverlingua-light-blue'>
            We reinforce your confidence<br /> when speaking Spanish<br /> in our conversational classes.
          </p>
        </GenericSection>
        <GenericSection textSide='right' img={imgblock3}>
          <h3 className='text-4xl mb-4 font-bold'>
            You will save time
          </h3>
          <p className='text-2xl'>
            Learning Spanish online with an<br /> interactive and conversational <br />method is the fastest way to get<br /> from zero to conversational.
          </p>
        </GenericSection>
        <GenericSection img={imgblock4} className='bg-diverlingua-light-blue'>
          <h3 className='text-4xl mb-4 font-bold bg-diverlingua-light-blue'>
            You will learn more<br /> and pay less!
          </h3>
          <p className='text-2xl bg-diverlingua-light-blue'>
            Start now with a 50% discount<br /> for the first week.
          </p>
        </GenericSection>
        <Employees />
      </main>
      <footer />
    </div>
  )
}
