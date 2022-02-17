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
import { useTranslation, Trans } from 'next-i18next'

export default function Form () {
  const { t } = useTranslation(['enroll', 'common'])

  const schema = yup.object({
    fullname: yup.string().required(t('error.nameRequired')),
    email: yup.string().email(t('error.emailValid')).required(t('error.emailRequired')),
    selectedPlan: yup.string().required(t('error.planRequired')),
    currentLevel: yup.string().nullable().required(t('error.levelRequired')),
    availability: yup.string().nullable().required(t('error.availabilityRequired')),
    scheduleDetails: yup.string().required(t('error.scheduleDetailsRequired'))
  }).required()

  const plans = [
    { id: 1, title: t('plan1.title'), description: t('plan1.desc'), price: t('plan1.price'), daysPerWeek: 1 },
    { id: 2, title: t('plan2.title'), description: <span>{t('plan2.desc')}<br />{t('plan2.desc2')}</span>, price: t('plan2.price'), daysPerWeek: 2 },
    { id: 3, title: t('plan3.title'), description: t('plan3.desc'), price: t('plan3.price'), daysPerWeek: 4 }
  ]
  const [currentPage, setCurrentPage] = useState(0)
  const [state, formspreeSubmit] = useFormspreeForm('mrgjerpl')
  const { handleSubmit, register, formState: { errors }, getValues, setValue } = useHookForm({
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const [selectedPlan, setSelectedPlan] = useState(plans[1].id)
  const setSelectedPlanAndInput = (p) => {
    setSelectedPlan(p)
    setValue('selectedPlan', p, { shouldValidate: true, shouldDirty: true })
  }

  const hasErrors = Object.keys(errors).length > 0

  // Number of days of selected plan
  const getNumDays = (id) => plans.find(p => p.id === id)?.daysPerWeek

  return (
    <div className='m-auto z-10 pt-4 max-w-screen-sm'>
      <Steps currentStep={currentPage} setCurrentStep={setCurrentPage} completed={state.succeeded} />
      <div className='bg-gray-100 overflow-hidden shadow sm:rounded-lg mt-4'>
        {state.succeeded
          ? (
            <div className='text-black px-4 py-5 sm:p-6'>
              <h1 className='font-display text-xl mb-2'>{t('submitted.h1')}</h1>
              <p><Trans i18nKey='submitted.p' ns='enroll' /></p>
            </div>
            )
          : (
            <form className='px-4 py-5 sm:p-6' onSubmit={handleSubmit(formspreeSubmit)}>
              <PlanSelection
                hidden={currentPage !== 0}
                register={register}
                errors={errors}
                plans={plans}
                setSelectedPlan={setSelectedPlanAndInput}
                selectedPlan={selectedPlan}
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
                numDays={getNumDays(selectedPlan)}
                setValue={setValue}
              />
              {getValues('selectedPlan')}
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
                  <span>{state.submitting ? <ScaleLoader height='20px' color='white' /> : t('submit')}</span>
                </button>
                <button
                  type='button'
                  onClick={() => setCurrentPage(currentPage + 1)}
                  className={classNames(
                    'relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500',
                    { hidden: currentPage >= 2 }
                  )}
                >
                  <span>{t('next')}</span>
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
