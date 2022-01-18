import Image from 'next/image'
import AnaPhoto from '../public/images/ana-foto.jpg'
import MiguelPhoto from '../public/images/miguel-foto.jpg'

export default function Employees () {
  const people = [
    {
      name: 'Miguel Frontado',
      role: 'English / Spanish',
      photo: MiguelPhoto,
      bio:
    'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.'
    },
    {
      name: 'Ana Simanca',
      role: 'French / Spanish',
      photo: AnaPhoto,
      bio:
    'Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.'
    }
  ]

  const employeesListItems = people.map(person => (
    <li key={person.name}>
      <div className='space-y-4 sm:grid sm:grid-cols-3 sm:gap-6 sm:space-y-0 lg:gap-8'>
        <div className='h-0 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4'>
          {/* <img class="object-cover shadow-lg rounded-lg" :src="require(`~/assets/${person.imageUrl}`)" alt=""> */}
          <Image src={person.photo} alt={`Photo of ${person.name}`} className='rounded-xl' placeholder='blur' />
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
    </li>
  ))

  return (
    <div className='bg-white'>
      <div className='mx-auto py-10 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
        <div className='space-y-12'>
          <h2 className='text-3xl font-extrabold font-header tracking-tight sm:text-4xl'>
            Meet our teachers
          </h2>
          <ul role='list' className='space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0'>
            {employeesListItems}
          </ul>
        </div>
      </div>
    </div>
  )
}
