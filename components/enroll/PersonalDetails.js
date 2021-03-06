import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

export default function PersonalDetails ({ hidden, register, errors }) {
  const { t } = useTranslation(['enroll', 'common'])
  const languageLevels = [
    { id: 'beginner', name: t('personalDetails.level1.name'), description: t('personalDetails.level1.desc') },
    { id: 'intermediate', name: t('personalDetails.level2.name'), description: t('personalDetails.level2.desc') },
    { id: 'conversational', name: t('personalDetails.level3.name'), description: t('personalDetails.level3.desc') }
  ]
  return (
    <div className={classNames(
      'grid grid-cols-1 gap-y-6 w-full place-items-center divide-y divide-gray-300',
      { hidden }
    )}
    >
      <div className='w-2/3 grid grid-cols-1 gap-y-4'>
        <div className='text-black'>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            {t('personalDetails.nameLabel')}
          </label>
          <div className='mt-1 flex rounded-md shadow-sm'>
            <input
              autoComplete='username'
              className='flex-1 focus:ring-rose-500 focus:border-rose-500 block min-w-0 rounded-md sm:text-sm border-gray-300'
              id='fullname'
              name='fullname'
              placeholder={t('personalDetails.namePlaceholder')}
              type='text'
              tabIndex='1'
              {...register('fullname', { required: true })}
            />
          </div>
          <p className='block text-sm font-medium text-red-700 mt-1'>
            {errors?.fullname?.message}
          </p>
        </div>
        <div className='text-black'>
          <label htmlFor='username' className='block text-sm font-medium text-gray-700'>
            {t('personalDetails.emailLabel')}
          </label>
          <div className='mt-1 flex rounded-md shadow-sm'>
            <input
              autoComplete='email'
              className='flex-1 focus:ring-rose-500 focus:border-rose-500 block min-w-0 rounded-md sm:text-sm border-gray-300'
              id='email'
              name='email'
              placeholder={t('personalDetails.emailPlaceholder')}
              type='text'
              tabIndex='2'
              {...register('email', { required: true })}
            />
          </div>
          <p className='block text-sm font-medium text-red-700 mt-1'>
            {errors?.email?.message}
          </p>
        </div>
      </div>
      <fieldset className='pt-4' id='level'>
        <label htmlFor='currentLevel' className='block text-sm font-medium text-gray-700 mb-3'>
          {t('personalDetails.currentLevelLabel')}
        </label>
        <legend className='sr-only'>{t('personalDetails.currentLevelLegend')}</legend>
        <p className='block text-sm font-medium text-red-700 mb-2'>
          {errors?.currentLevel?.message}
        </p>
        <div className='space-y-5'>
          {languageLevels.map((level, levelIdx) => (
            <div key={level.id} className='relative flex items-start'>
              <div className='flex items-center h-5'>
                <input
                  id={level.id}
                  value={level.id}
                  aria-describedby={`${level.id}-description`}
                  name='currentLevel'
                  type='radio'
                  tabIndex={levelIdx + 3}
                  {...register('currentLevel')}
                  defaultChecked={level.id === 'small'}
                  className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300'
                />
              </div>
              <div className='ml-3 text-sm'>
                <label htmlFor={level.id} className='font-medium text-gray-700'>
                  {level.name}
                </label>
                <p id={`${level.id}-description`} className='text-gray-500'>
                  {level.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  )
}
