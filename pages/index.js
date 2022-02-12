import Head from 'next/head'
import GenericSection from '../components/GenericSection'
import Image from 'next/image'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from 'next-i18next'

import edificios from '../public/images/edificios2.svg'
import imgblock1 from '../public/images/imgblock1.svg'
import imgblock2 from '../public/images/imgblock2.svg'
import imgblock3 from '../public/images/imgblock3.svg'
import imgblock4 from '../public/images/imgblock4.svg'
import Employees from '../components/Employees'
import RandomStars from '../components/RandomStars'
import Navbar from '../components/Nav'
// import styles from '../styles/Home.module.css'

export async function getStaticProps ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home']))
      // Will be passed to the page component as props
    }
  }
}

export default function Home () {
  const { t } = useTranslation(['home', 'common'])
  return (
    <div>
      <Head>
        <title>{t('page-title', { ns: 'common' })}</title>
      </Head>
      <Navbar />
      <main>
        <div className='bg-blue-900 w-full relative'>
          <div className='relative w-full flex flex-col justify-center items-center max-w-screen-xl m-auto'>
            <GenericSection textSide='right' style={{ marginBottom: '-1px' }}>
              <h2 className='md:text-6xl text-5xl text-white font-bold md:leading-normal md:mr-24 mb-24'>
                <Trans ns='home' i18nKey='header'>
                  Learn <span className='text-rose-600'>Spanish</span><br />
                  <span className='md:ml-12'>from anywhere.</span>
                </Trans>
              </h2>
              <Image src={edificios} alt='' layout='fill' objectFit='cover' objectPosition='center bottom' priority />
            </GenericSection>
          </div>
          <RandomStars />
        </div>
        <GenericSection img={imgblock1} textSide='right'>
          <Trans ns='home' i18nKey='section1'>
            <h3 className='text-4xl mb-4 font-bold'>
              You will learn Spanish
            </h3>
            <p className='text-2xl font-display'>
              with native teachers who<br />adapt to your needs.
            </p>
          </Trans>
        </GenericSection>
        <GenericSection img={imgblock2} className='bg-diverlingua-light-blue text-white' shadow stars>
          <Trans ns='home' i18nKey='section2'>
            <h3 className='text-4xl mb-4 font-bold bg-diverlingua-light-blue'>
              We help you lose your<br />fear of speaking spanish.
            </h3>
            <p className='text-2xl bg-diverlingua-light-blue font-display'>
              We reinforce your confidence<br /> when speaking Spanish<br /> in our conversational classes.
            </p>
          </Trans>
        </GenericSection>
        <GenericSection textSide='right' img={imgblock3}>
          <Trans ns='home' i18nKey='section3'>
            <h3 className='text-4xl mb-4 font-bold font-header'>
              You will save time
            </h3>
            <p className='text-2xl font-display'>
              Learning Spanish online with an<br /> interactive and conversational <br />method is the fastest way to get<br /> from zero to conversational.
            </p>
          </Trans>
        </GenericSection>
        <GenericSection img={imgblock4} className='bg-diverlingua-light-blue text-white' shadow stars>
          <Trans ns='home' i18nKey='section4'>
            <h3 className='text-4xl mb-4 font-bold bg-diverlingua-light-blue font-header'>
              You will learn more<br /> and pay less!
            </h3>
            <p className='text-2xl bg-diverlingua-light-blue font-display'>
              Start now with a 50% discount<br /> for the first week.
            </p>
          </Trans>
        </GenericSection>
        <Employees />
      </main>
      <footer />
    </div>
  )
}
