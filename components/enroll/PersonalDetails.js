const languageLevels = [
  { id: 'small', name: 'Beginner', description: 'I know nothing or close to nothing.' },
  { id: 'medium', name: 'Intermediate', description: 'I have trouble listening or speaking, but know grammar and some vocab.' },
  { id: 'large', name: 'Conversational', description: 'Can speak, and listen, but I need some more polish. ' }
]

export default function PersonalDetails () {
  return (
    <div className='grid grid-cols-1 gap-y-6 w-full place-items-center divide-y divide-gray-300'>
      <div className='w-2/3 grid grid-cols-1 gap-y-4'>
        <div className='text-black'>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            What can we call you?
          </label>
          <div className='mt-1 flex rounded-md shadow-sm'>
            <input
              type='text'
              name='username'
              id='username'
              autoComplete='username'
              placeholder='Your name'
              className='flex-1 focus:ring-indigo-500 focus:border-indigo-500 block min-w-0 rounded-md sm:text-sm border-gray-300'
            />
          </div>
        </div>
        <div className='text-black'>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            What's your email?
          </label>
          <div className='mt-1 flex rounded-md shadow-sm'>
            <input
              type='text'
              name='username'
              id='username'
              autoComplete='email'
              placeholder='Email'
              className='flex-1 focus:ring-indigo-500 focus:border-indigo-500 block min-w-0 rounded-md sm:text-sm border-gray-300'
            />
          </div>
        </div>
      </div>
      <fieldset className='pt-4'>
        <legend className='sr-only'>Plan</legend>
        <div className='space-y-5'>
          {languageLevels.map((plan) => (
            <div key={plan.id} className='relative flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id={plan.id}
                  aria-describedby={`${plan.id}-description`}
                  name='plan'
                  type='radio'
                  defaultChecked={plan.id === 'small'}
                  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor={plan.id} className='font-medium text-gray-700'>
                  {plan.name}
                </label>
                <p id={`${plan.id}-description`} className='text-gray-500'>
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
