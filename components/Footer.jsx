import Image from 'next/image'
import griffin from '@/assets/images/logo.png'

const Footer = () => {
  return ( 
    <footer className='bg-dark text-light py-4 mt-auto'>
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
            <li><a href='/properties.html'>Properties</a></li>
            <li><a href='/terms.html'>Terms & Conditions</a></li>
          </ul>
        </div>
        <div>
          <p className='text-sm text-light mt-2 md:mt-0'>
            &copy; 2025 Griffin Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer