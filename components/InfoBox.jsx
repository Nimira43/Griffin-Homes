import Link from 'next/link'

const InfoBox = ({
  heading,
  
  children


}) => {

  return ( 
    <div className='bg-prime-info-1 p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl text-prime-dark-extra font-semibold'>{ heading }</h2>
      <p className='mt-2 mb-4'>{children}</p>
      <Link
        href='/properties'
        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-prime-dark-extra hover:text-grey-light'
      >
        Check Properties
      </Link>
    </div>
   )
}
 
export default InfoBox