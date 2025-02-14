import Image from 'next/image'
import Link from 'next/link'
import griffin from '@/assets/images/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return ( 
    <footer className='bg-dark py-4 mt-24'>
      <div
        className='container mx-auto flex flex-col md:flex-row items-center justify-between px-4'
      >
        <div className='mb-4 md:mb-0'>
          <Image
            className='h-8 w-auto'
            src={griffin}
            alt='Griffin Homes'
          />
        </div>
        <div
          className='flex flex-wrap justify-center md:justify-start mb-4 md:mb-0'
        >
          <ul className='flex space-x-4'>
            <li>
              <Link className='text-light hover:text-grey-light' href='/properties'
              >
                Properties
              </Link>
            </li>
            <li>
              <Link className='text-light hover:text-grey-light' href='/'
              >
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-light hover:text-grey-light mt-2 md:mt-0'>
            &copy; {currentYear} Griffin Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer