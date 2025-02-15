const Hero = () => {
  return ( 
    <section 
      className='py-20 mb-4 bg-prime-light'
    >
      <div 
        className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center'
      >
        <div 
          className='text-center'
        >
          <h1 
            className='text-4xl font-medium text-prime-dark-extra sm:text-5xl md:text-6xl logo'
          >
            Explore & Discover
          </h1>
          <p 
            className='my-4 text-xl text-prime-dark-extra'
          >
            Search our range of premium properties.
          </p>
        </div>
        <form 
          className='mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center'
        >
          <div 
            className='w-full md:w-3/5 md:pr-2 mb-4 md:mb-0'
          >
            <label 
              htmlFor='location' 
              className='sr-only'
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              placeholder='Enter location'
              className='w-full px-4 py-3 rounded-md bg-light text-dark focus:outline-none focus:ring-1 focus:ring-prime-dark-extra' 
            />
          </div>
          <div 
            className='w-full md:w-2/5 md:pl-2'
          >
            <label 
              htmlFor='property-type'
              className='sr-only'
            >
              Property Type
            </label>
            <select
              id='property-type' 
              className='w-full px-4 py-3 rounded-md bg-light text-dark focus:outline-none focus:ring-1 focus:ring-prime-dark-extra'
            >
              <option value='All'>All</option>
              <option value='Apartment'>Apartment</option>
              <option value='Studio'>Studio</option>
              <option value='Flat'>Flat</option>
              <option value='House'>House</option>
              <option value='Cabin Or Cottage'>Cabin Or Cottage</option>
              <option value='Loft'>Loft</option>
              <option value='Room'>Room</option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <button className='md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-md bg-dark text-light hover:bg-prime-dark-extra hover:text-grey-light focus:outline-none uppercase '
          >
            Search
          </button>
        </form>
      </div>
    </section>
   )
}
 
export default Hero