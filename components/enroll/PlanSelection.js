/* This example requires Tailwind CSS v2.0+ */
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

export default function PlanSelection ({ hidden, register, setSelectedPlan, selectedPlan, plans }) {
  const { t } = useTranslation(['enroll', 'common'])

  return (
    <RadioGroup value={selectedPlan} onChange={setSelectedPlan} className={classNames({ hidden })}>
      <RadioGroup.Label className='text-base font-medium text-gray-900'>{t('planSelection.timePerWeek')}</RadioGroup.Label>
      <br />
      <input
        type='text'
        className='hidden'
        name='plan'
        id='plan'
        defaultValue={selectedPlan}
        {...register('selectedPlan')}
      />
      <small className='text-gray-800'>{t('planSelection.lengthDesc')}</small>
      <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.id}
            value={plan.id}
            className={({ checked, active }) =>
              classNames(
                { 'ring-2 ring-rose-600': active, 'border-transparent': checked, 'border-gray-300': !checked },
                'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
              )}
          >
            {({ checked, active }) => (
              <>
                <div className='flex-1 flex'>
                  <div className='flex flex-col'>
                    <RadioGroup.Label as='span' className='block text-sm font-medium text-gray-900'>
                      {plan.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as='span' className='mt-1 flex items-center text-sm text-gray-500'>
                      {plan.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description as='span' className='mt-6 text-sm font-medium text-gray-900'>
                      {plan.price}
                    </RadioGroup.Description>
                  </div>
                </div>
                <CheckCircleIcon
                  className={classNames({ invisible: !checked }, 'h-5 w-5 text-rose-600')}
                  aria-hidden='true'
                />
                <div
                  className={classNames(
                    active ? 'border' : 'border-2',
                    checked ? 'border-rose-700' : 'border-transparent',
                    'absolute -inset-px rounded-lg pointer-events-none'
                  )}
                  aria-hidden='true'
                />
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
