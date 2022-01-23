import { useState } from 'react'
import PersonalDetails from './PersonalDetails'
import PlanSelection from './PlanSelection'
import Schedule from './Schedule'
import Steps from './Steps'

export default function Form () {
  const [currentPage, setCurrentPage] = useState(0)

  function getCurrentSection () {
    switch (currentPage) {
      case 0:
        return <PlanSelection />
      case 1:
        return <PersonalDetails />
      case 2:
        return <Schedule />
    }
  }

  return (
    <div className='m-auto z-10 pt-4'>
      <Steps currentStep={currentPage} setCurrentStep={setCurrentPage} />
      <div className='bg-gray-100 overflow-hidden shadow sm:rounded-lg mt-4'>
        <div className='px-4 py-5 sm:p-6'>
          {getCurrentSection()}
          <div className='text-right mt-4'>
            <button
              type='button'
              onClick={() => setCurrentPage(currentPage + 1)}
              className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
            >
              <span>{currentPage === 2 ? 'Submit' : 'Next'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
