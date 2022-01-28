/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import classNames from 'classnames'

import uk from '../public/images/united-kingdom.png'
import es from '../public/images/spain.png'
import Image from 'next/image'

const languages = [
  { name: 'English', code: 'en', flag: uk },
  { name: 'Español', code: 'es', flag: es }
]

export default function LanguageSelector () {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full px-4 py-2 border border-transparent text-sm font-medium text-white bg-black rounded-md bg-opacity-50 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          {selectedLanguage.name}
          <div id='nav-logo-wrapper' className='aspect-square relative h-full'>
            <Image src={selectedLanguage.flag} alt={`Flag of ${selectedLanguage.name}`} layout='fill' />
          </div>
          <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5' aria-hidden='true' />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-32 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-20'>
          <div className='divide-y divide-gray-200'>
            {
              languages.map(language => (
                <Menu.Item key={language.code} onClick={() => setSelectedLanguage(language)}>
                  {({ active }) => (
                    <a
                      href='#'
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'px-4 py-2 text-sm flex w-full relative h-10 first:rounded-t-md last:rounded-b-md bg-white'
                      )}
                    >
                      <span className='grow inline-flex items-center'>{language.name}</span>
                      <div id='nav-logo-wrapper' className='aspect-square relative h-full'>
                        <Image src={language.flag} alt={`Flag of ${language.name}`} layout='fill' />
                      </div>
                    </a>
                  )}
                </Menu.Item>
              ))
            }
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
