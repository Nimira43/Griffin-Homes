const Hero = () => {
  return ( 
    <section 
      className="py-20 mb-4 bg-prime-light"
    >
      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
      >
        <div 
          className="text-center"
        >
          <h1 
            className="text-4xl font-medium text-prime-dark-extra sm:text-5xl md:text-6xl logo"
          >
            Explore & Discover
          </h1>
          <p 
            className="my-4 text-xl text-prime-dark-extra"
          >
            Search our range of premium properties.
          </p>
        </div>
        <form 
          className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center"
        >
          <div 
            className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0"
          >
            <label 
              htmlFor="location" 
              className="sr-only"
            >
              Location
            </label>
            <input
              type='text'
              id='location'
              placeholder="Enter location"
              className="w-full px-4 py-3 rounded-md bg-light text-dark focus:outline-none focus:ring focus:ring-prime-dark-extra" 
            />

          </div>
        </form>
      </div>
    </section>
   )
}
 
export default Hero