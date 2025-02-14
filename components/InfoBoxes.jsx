import Link from 'next/link'

const InfoBoxes = () => {
  return ( 
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <div className='bg-prime-light p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl text-prime-dark-extra font-semibold'>For Renters</h2>
            <p className='mt-2 mb-4'>
              Discover your ideal rental property. Save your favourite listings and get in touch with the owners.
            </p>
            <Link
              href='/properties'
              className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-prime-dark-extra hover:text-grey-light'
            >
              Check Properties
            </Link>
          </div>
          <div className='bg-prime-light p-6 rounded-lg shadow-md'>
            <h2 className='text-2xl text-prime-dark-extra font-semibold'>For Property Owners</h2>
            <p className='mt-2 mb-4'>
              Showcase your properties and attract potential tenants. Rent out your space as a holiday let or opt for long-term leasing..
            </p>
            <Link
              href='/add-property'
              className='inline-block bg-dark text-light rounded-lg px-4 py-2 hover:bg-prime-dark-extra hover:text-grey-light'
            >
              Add Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default InfoBoxes