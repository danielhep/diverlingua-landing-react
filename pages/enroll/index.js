import Form from '../../components/enroll/Form'
import Navbar from '../../components/Nav'
import RandomStars from '../../components/RandomStars'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation, Trans } from 'next-i18next'

export async function getStaticProps ({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'enroll']))
      // Will be passed to the page component as props
    }
  }
}

export default function Enroll () {
  const { t } = useTranslation(['enroll', 'common'])
  return (
    <div className='min-h-screen bg-diverlingua-aqua flex flex-col'>
      <Navbar />
      <div className='flex-grow flex-col flex relative text-white'>
        <RandomStars />
        {/* Relative and Z-10 is necessary to put in front of stars. */}
        <div className='max-w-screen-lg flex flex-col flex-grow m-auto items-center relative z-10'>
          <div className='w-full pt-4'>
            <h2 className='font-header text-4xl bg-diverlingua-aqua'>{t('enroll-h2')}</h2>
            <h4 className='font-display bg-diverlingua-aqua text-lg'>
              <Trans i18nKey='enroll-h4'>
                We process each enrollment by hand to ensure the best, most personal expierience.<br />
                You can expect an email from us within 24 hours to set up your lessons.
              </Trans>
            </h4>
          </div>
          <div className='flex-grow'>
            <Form />
          </div>
          {/* <Image src={edificios} alt='' layout='intrinsic' priority /> */}
        </div>
      </div>
    </div>
  )
}
