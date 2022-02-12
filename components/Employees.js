import Image from 'next/image'
import AnaPhoto from '../public/images/ana-foto.jpg'
import MiguelPhoto from '../public/images/miguel-foto.jpg'
import { useTranslation } from 'next-i18next'

export default function Employees () {
  const { t } = useTranslation(['home', 'common'])
  const people = [
    {
      name: 'Miguel Frontado',
      role: `${t('english', { ns: 'common' })} / ${t('spanish', { ns: 'common' })}`,
      photo: MiguelPhoto,
      bio: t('miguelBio')
    },
    {
      name: 'Ana Simanca',
      role: `${t('french', { ns: 'common' })} / ${t('spanish', { ns: 'common' })}`,
      photo: AnaPhoto,
      bio: t('anaBio')
    }
  ]

  const employeesListItems = people.map(person => (
    <li key={person.name}>
      <div className='space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8'>
        <div className='aspect-square'>
          <div className='img-wrapper'>
            <Image src={person.photo} alt={t('photo-of-person-name', { personName: person.name })} placeholder='blur' />
          </div>
        </div>
        <div className='sm:col-span-2'>
          <div className='space-y-4'>
            <div className='text-lg leading-6 font-medium space-y-1'>
              <h3>{person.name}</h3>
              <p className='text-diverlingua-aqua'>
                {person.role}
              </p>
            </div>
            <div className='text-lg'>
              <p className='text-gray-500'>
                {person.bio}
              </p>
            </div>
          </div>
        </div>
      </div>
      <style global jsx>{`
        .img-wrapper span {
          border-radius: 0.75rem;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        }
      `}
      </style>
    </li>
  ))

  return (
    <div className='bg-white'>
      <div className='mx-auto py-10 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <h2 className='text-3xl font-extrabold font-header tracking-tight sm:text-4xl'>
            {t('meet-our-teachers')}
          </h2>
          <ul role='list' className='space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0'>
            {employeesListItems}
          </ul>
        </div>
      </div>
    </div>
  )
}
