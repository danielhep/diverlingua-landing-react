import classNames from 'classnames'
import { useState } from 'react'

const daysOfWeek = [
  {
    name: 'Monday',
    shortName: 'Mon',
    selected: false
  },
  {
    name: 'Tueday',
    shortName: 'Tue',
    selected: false
  },
  {
    name: 'Wednesday',
    shortName: 'Wed',
    selected: false
  },
  {
    name: 'Thursday',
    shortName: 'Thu',
    selected: false
  },
  {
    name: 'Friday',
    shortName: 'Fri',
    selected: false
  },
  {
    name: 'Saturday',
    shortName: 'Sat',
    selected: false
  },
  {
    name: 'Sunday',
    shortName: 'Sun',
    selected: false
  }
]

export default function Schedule ({ hidden, register, errors, numDays, setValue }) {
  const [availability, setAvailability] = useState([])

  const toggleDay = (day) => {
    let newAvailability
    if (availability.includes(day)) {
      newAvailability = availability.filter(d => d !== day)
    } else {
      newAvailability = [...availability, day]
    }
    setAvailability(newAvailability)
    setValue('availability', newAvailability.join(', '), { shouldValidate: true, shouldDirty: true })
  }
  return (
    <div className={classNames('text-black flex flex-col space-y-4', { hidden })}>
      <div>
        <h2 className='text-sm font-medium text-gray-900'>What is your weekly availability?</h2>
        <a href='#' className='text-sm font-medium text-gray-600'>
          Please select all times that work for you, so we can a good time for weekly classes. <br />
          {numDays && `Please select at least ${numDays} ${numDays > 1 ? 'days' : 'day'}.`}
        </a>
      </div>
      <input
        type='text'
        className='hidden'
        name='availabiliy'
        value={availability.join(', ')}
        {...register('availability')}
        readOnly
      />
      <div className='mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7'>
        {
          daysOfWeek.map(day => (
            <div key={day.shortName}>
              <div
                onClick={() => toggleDay(day.shortName)}
                className={classNames(
                  'border rounded-md py-3 px-1 flex items-center justify-center text-sm font-medium uppercase sm:flex-1 cursor-pointer',
                  availability.includes(day.shortName)
                    ? 'bg-rose-600 border-transparent text-white hover:bg-rose-700'
                    : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50'
                )}
              >
                <p>{day.shortName}</p>
              </div>
            </div>
          ))
        }
      </div>
      <p className='block text-sm font-medium text-red-700 mt-1'>
        {errors?.availability?.message}
      </p>
      <div className='max-w-full'>
        <label htmlFor='comment' className='block text-sm font-medium text-gray-700'>
          Add any details about your availability, such as times and preferences.<br />
          Please try to be as detailed as possible, so we can set up your lessons quickly.
        </label>
        <div className='mt-1'>
          <textarea
            rows={4}
            name='scheduleDetails'
            id='scheduleDetails'
            className='shadow-sm focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-gray-300 rounded-md'
            defaultValue=''
            {...register('scheduleDetails')}
          />
        </div>
        <p className='block text-sm font-medium text-red-700 mt-1'>
          {errors?.scheduleDetails?.message}
        </p>
      </div>
    </div>
  )
}
