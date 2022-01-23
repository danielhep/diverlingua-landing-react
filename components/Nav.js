/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import Image from 'next/image'

import diverlinguaLogo from '../public/images/logo.svg'
import Link from 'next/link'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
}
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Blog', href: '#', current: false },
  { name: 'Contact', href: '#', current: false },
  { name: 'Ethics', href: '#', current: false }
]

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar () {
  return (
    <Disclosure as='nav' className='bg-blue-900'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between h-16'>
              <div className='flex'>
                <div className='-ml-2 mr-2 flex items-center md:hidden'>
                  {/* Mobile menu button */}
                  <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='sr-only'>Open main menu</span>
                    {open
                      ? (
                        <XIcon className='block h-6 w-6' aria-hidden='true' />
                        )
                      : (
                        <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                        )}
                  </Disclosure.Button>
                </div>
                <div className='flex-shrink-0 flex items-center h-8 w-32'>
                  <div className='w-full h-full relative' id='logo-wrapper'>
                    <Image src={diverlinguaLogo} layout='responsive' width='100%' height='100%' objectFit='contain' alt='Diverlingua' />
                  </div>
                  <style global jsx>{`
                    #logo-wrapper span {
                        height: 2rem !important; // the <Image> tag is dumb
                    }
                `}
                  </style>
                </div>
                <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white',
                        'px-3 py-2 rounded-md text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <Link href='enroll'>
                    <button
                      type='button'
                      className='relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
                    >
                      <span>Enroll</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  )
}
