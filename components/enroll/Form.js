import { useForm as useFormspreeForm } from '@formspree/react'
import { useForm as useHookForm } from 'react-hook-form'
import classNames from 'classnames'
import { useState } from 'react'
import PersonalDetails from './PersonalDetails'
import PlanSelection from './PlanSelection'
import Schedule from './Schedule'
import Steps from './Steps'
import { ScaleLoader } from 'react-spinners'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object({
  fullname: yup.string().required('Fullname is required.'),
  email: yup.string().email('A valid email is required.').required('Email is required.'),
  selectedPlan: yup.string().required('Plan selection is required.'),
  currentLevel: yup.string().nullable().required('Current language level is required.'),
  availability: yup.string().nullable().required('Please select at least one day per class.'),
  scheduleDetails: yup.string().required('Please enter some availability details to help us plan your schedule.')
}).required()

const plans = [
  { id: 1, title: 'Relaxed', description: 'One lesson per week.', price: '$40 monthly', daysPerWeek: 1 },
  { id: 2, title: 'Balanced', description: <span>Two lessons per week.<br /> Most popular!</span>, price: '$55 per month', daysPerWeek: 2 },
  { id: 3, title: 'Rocketship', description: 'Four lessons per week.', price: '$100 per month', daysPerWeek: 4 }
]

export default function Form () {
  const [currentPage, setCurrentPage] = useState(0)
  const [state, formspreeSubmit] = useFormspreeForm('mrgjerpl')
  const { handleSubmit, register, formState: { errors }, getValues, setValue } = useHookForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const hasErrors = Object.keys(errors).length > 0

  // Number of days of selected plan
  const getNumDays = (planTitle) => plans.find(p => p.title === planTitle)?.daysPerWeek

  return (
    <div className='m-auto z-10 pt-4'>
      <Steps currentStep={currentPage} setCurrentStep={setCurrentPage} completed={state.succeeded} />
      <div className='bg-gray-100 overflow-hidden shadow sm:rounded-lg mt-4'>
        {state.succeeded
          ? (
            <div className='text-black px-4 py-5 sm:p-6'>
              <h1 className='font-display text-xl mb-2'>Thank you for your submission!</h1>
              <p>We will reach out to you soon to set up payment and classes,<br /> as well as introduce you to your techer.</p>
            </div>
            )
          : (
            <form className='px-4 py-5 sm:p-6' onSubmit={handleSubmit(formspreeSubmit)}>
              <PlanSelection
                hidden={currentPage !== 0}
                register={register}
                errors={errors}
                plans={plans}
                setValue={setValue}
              />
              <PersonalDetails
                hidden={currentPage !== 1}
                register={register}
                errors={errors}
              />
              <Schedule
                hidden={currentPage < 2}
                register={register}
                errors={errors}
                numDays={getNumDays(getValues('selectedPlan'))}
                setValue={setValue}
              />
              <div className='text-right mt-4'>
                <button
                  type='submit'
                  disabled={state.submitting || hasErrors}
                  className={classNames(
                    'relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-whitefocus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500',
                    { hidden: currentPage < 2 },
                    state.submitting || hasErrors ? 'bg-gray-700 opacity-70 cursor-not-allowed' : 'bg-rose-600  hover:bg-rose-700 '
                  )}
                >
                  <span>{state.submitting ? <ScaleLoader height='20px' color='white' /> : 'Submit'}</span>
                </button>
                <button
                  type='button'
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className={classNames(
                    'relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500',
                    { hidden: currentPage >= 2 }
                  )}
                >
                  <span>Next</span>
                </button>
              </div>
              {
                currentPage >= 2 && Object.keys(errors).map(key => (
                  <p className='block text-sm font-medium text-red-700 mt-1' key={key}>
                    {errors[key].message}
                  </p>
                ))
              }
            </form>
            )}
      </div>
    </div>
  )
}
