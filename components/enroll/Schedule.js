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

export default function Schedule () {
  const [availability, setAvailability] = useState([])

  const toggleDay = (day) => {
    if (availability.includes(day)) {
      setAvailability(availability.filter(d => d !== day))
    } else {
      setAvailability([...availability, day])
    }
  }
  return (
    <div className='text-black flex flex-col space-y-4'>
      <div>
        <h2 className='text-sm font-medium text-gray-900'>What is your weekly availability?</h2>
        <a href='#' className='text-sm font-medium text-gray-600'>
          Please select all times that work for you, so we can a good time for weekly classes.
        </a>
      </div>
      <div className='mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7'>
        {
          daysOfWeek.map(day => (
            <div
              key={day.shortName}
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
          ))
        }
      </div>
      <div className='max-w-full'>
        <label htmlFor='comment' className='block text-sm font-medium text-gray-700'>
          Add any details about your availability, such as times and preferences.<br />
          Please try to be as detailed as possible, so we can set up your lessons quickly.
        </label>
        <div className='mt-1'>
          <textarea
            rows={4}
            name='comment'
            id='comment'
            className='shadow-sm focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-gray-300 rounded-md'
            defaultValue=''
          />
        </div>
      </div>
    </div>
  )
}
