import properties from '@/properties.json'
import PropertyCard from './PropertyCard'
import Link from 'next/link'

const HomeProperties = () => {
  const recentProperties = properties.slice(0, 3)

  return ( 
    <>
      <section className='px-4 py-6'>
        <div className='container-xl lg:container m-auto px-4 py-6'>
          <h2 className='text-3xl font-semibold text-prime-dark-extra mb-6 text-center'>Latest Properties</h2>
          {properties.length === 0 ? (<p>No Properties Found</p>) : (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {
                recentProperties.map((property) => (
                  <PropertyCard
                    key={property._id}
                    property={property}
                  />
                ))
              }
            </div>
          ) }
        </div>
      </section>
      <section className='m-auto max-w-lg
       my-6 px-6'>
        <Link href='/properties' className='block bg-dark hover:bg-prime-dark-extra text-light hover:text-grey-light text-center py-4 px-6 rounded-md uppercase' >
          View All Properties
        </Link>  
      </section>
    </>
    
  )
}
 
export default HomeProperties