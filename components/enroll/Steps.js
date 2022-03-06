import { CheckIcon } from '@heroicons/react/solid'
import { useTranslation } from 'next-i18next'

export default function Steps ({ currentStep, setCurrentStep, completed }) {
  const { t } = useTranslation(['enroll', 'common'])

  const steps = [
    { id: '01', name: t('steps.name1'), href: '#', status: 'complete' },
    { id: '02', name: t('steps.name2'), href: '#', status: 'current' },
    { id: '03', name: t('steps.name3'), href: '#', status: 'upcoming' }
  ]

  return (
    <nav aria-label='Progress'>
      <ol role='list' className='border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0 bg-black/50'>
        {!completed
          ? steps.map((step, stepIdx) => (
            <li key={step.name} className='relative md:flex-1 md:flex'>
              {stepIdx < currentStep
                ? (
                  <a onClick={() => setCurrentStep(stepIdx)} className='group flex items-center w-full'>
                    <span className='px-6 py-4 flex items-center text-sm font-medium'>
                      <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center bg-rose-600 rounded-full group-hover:bg-rose-500'>
                        <CheckIcon className='w-6 h-6 text-white' aria-hidden='true' />
                      </span>
                      <span className='ml-4 text-sm font-medium text-gray-100'>{step.name}</span>
                    </span>
                  </a>
                  )
                : stepIdx === currentStep
                  ? (
                    <a onClick={() => setCurrentStep(stepIdx)} className='px-6 py-4 flex items-center text-sm font-medium' aria-current='step'>
                      <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-rose-500 rounded-full'>
                        <span className='text-rose-500'>{step.id}</span>
                      </span>
                      <span className='ml-4 text-sm font-medium text-gray-100'>{step.name}</span>
                    </a>
                    )
                  : (
                    <a onClick={() => setCurrentStep(stepIdx)} className='group flex items-center'>
                      <span className='px-6 py-4 flex items-center text-sm font-medium'>
                        <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400'>
                          <span className='text-gray-300 group-hover:text-gray-400'>{step.id}</span>
                        </span>
                        <span className='ml-4 text-sm font-medium text-gray-300 group-hover:text-gray-400'>{step.name}</span>
                      </span>
                    </a>
                    )}

              {stepIdx !== steps.length - 1
                ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div className='hidden md:block absolute top-0 right-0 h-full w-5' aria-hidden='true'>
                      <svg
                        className='h-full w-full text-gray-300'
                        viewBox='0 0 22 80'
                        fill='none'
                        preserveAspectRatio='none'
                      >
                        <path
                          d='M0 -2L20 40L0 82'
                          vectorEffect='non-scaling-stroke'
                          stroke='currentcolor'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </div>
                  </>
                  )
                : null}
            </li>
          ))
          : (
            <div className='relative md:flex-1 md:flex'>
              <span className='px-6 py-4 flex items-center text-sm font-medium'>
                <span className='flex-shrink-0 w-10 h-10 flex items-center justify-center bg-rose-600 rounded-full group-hover:bg-rose-500'>
                  <CheckIcon className='w-6 h-6 text-white' aria-hidden='true' />
                </span>
                <span className='ml-4 text-sm font-medium text-gray-100'>t('registration-submitted')</span>
              </span>
            </div>
            )}
      </ol>
    </nav>
  )
}
