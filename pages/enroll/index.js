import Form from '../../components/enroll/Form'
import Navbar from '../../components/Nav'
import RandomStars from '../../components/RandomStars'

export default function Enroll () {
  return (
    <div className='min-h-screen bg-diverlingua-aqua flex flex-col'>
      <Navbar />
      <div className='flex-grow flex-col flex relative text-white'>
        <RandomStars />
        {/* Relative and Z-10 is necessary to put in front of stars. */}
        <div className='max-w-screen-lg flex flex-col flex-grow m-auto items-center relative z-10'>
          <div className='w-full pt-4'>
            <h2 className='font-header text-4xl bg-diverlingua-aqua'>Ready to learn a language?</h2>
            <h4 className='font-display bg-diverlingua-aqua text-lg'>
              We process each enrollment by hand to ensure the best, most personal expierience.<br />
              You can expect an email from us within 24 hours to set up your lessons.
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
