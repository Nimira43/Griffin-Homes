import properties from '@/properties.json'

const PropertiesPage = () => {
  return ( 
    <section className='px-4 py-6'>
      <div className='container-xl lg:container m-auto px-4 py-6'>
        {properties.length === 0 ? (<p>No Properties Found</p>) : (
          <p>Properites</p>
        ) }
      </div>
    </section>
   )
}
 
export default PropertiesPage