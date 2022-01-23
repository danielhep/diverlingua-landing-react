/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/solid'

const mailingLists = [
  { id: 1, title: 'Relaxed', description: 'One lesson per week.', users: '$40 monthly' },
  { id: 2, title: 'Balanced', description: <span>Two lessons per week.<br /> Most popular!</span>, users: '$55 per month' },
  { id: 3, title: 'Rocketship', description: 'Four lessons per week.', users: '$100 per month' }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PlanSelection () {
  const [selectedMailingLists, setSelectedMailingLists] = useState(mailingLists[0])

  return (
    <RadioGroup value={selectedMailingLists} onChange={setSelectedMailingLists}>
      <RadioGroup.Label className='text-base font-medium text-gray-900'>How much time can you commit to lessons per week?</RadioGroup.Label>
      <br />
      <small className='text-gray-800'>Every lesson is 1.5 hours, which we believe is the ideal length for a one-on-one language class.</small>
      <div className='mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4'>
        {mailingLists.map((mailingList) => (
          <RadioGroup.Option
            key={mailingList.id}
            value={mailingList}
            className={({ checked, active }) =>
              classNames(
                checked ? 'border-transparent' : 'border-gray-300',
                active ? 'ring-2 ring-rose-600' : '',
                'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none'
              )}
          >
            {({ checked, active }) => (
              <>
                <div className='flex-1 flex'>
                  <div className='flex flex-col'>
                    <RadioGroup.Label as='span' className='block text-sm font-medium text-gray-900'>
                      {mailingList.title}
                    </RadioGroup.Label>
                    <RadioGroup.Description as='span' className='mt-1 flex items-center text-sm text-gray-500'>
                      {mailingList.description}
                    </RadioGroup.Description>
                    <RadioGroup.Description as='span' className='mt-6 text-sm font-medium text-gray-900'>
                      {mailingList.users}
                    </RadioGroup.Description>
                  </div>
                </div>
                <CheckCircleIcon
                  className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-rose-600')}
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
