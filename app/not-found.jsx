import Link from 'next/link'
import { AiOutlineExclamationCircle } from 'react-icons/ai'

const NotFoundPage = () => {
  return ( 
    <section className='bg-light min-h-screen flex-grow'>
      <div className='container m-auto max-w-2xl py-24'>
        <div
          className='bg-prime-light px-6 py-24 mb-4 shadow-md rounded-md border m-4 md:m-0'
        >
          <div className='flex justify-center'>
            <AiOutlineExclamationCircle
              className='fas fa-exclamation-triangle fa-5x text-8xl text-dark' 
            /> 
          </div>
          <div className='text-center'>
            <h1 className='text-prime-dark-extra text-3xl font-semibold mt-4 mb-2 uppercase'
            >
              Page Not Found
            </h1>
            <p className='text-prime-dark-extra text-xl mb-10'>
              We can't find the page you are looking for.
            </p>
            <Link
              href='/'
              className='bg-dark hover:bg-prime-dark-extra text-light hover:text-grey-light py-4 px-6 rounded-md uppercase'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='flex-grow'></div>
    </section>

   )
}
 
export default NotFoundPage