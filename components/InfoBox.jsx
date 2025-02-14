const InfoBox = ({
  heading,
  children,
  buttonInfo
}) => {

  return ( 
    <div className='bg-prime-light p-6 rounded-lg shadow-md'>
      <h2 className='text-2xl text-prime-dark-extra font-semibold'>{ heading }</h2>
      <p className='mt-2 mb-4'>{children}</p>
      <a
        href={buttonInfo.link}
        className='inline-block bg-dark text-white rounded-lg px-4 py-2 hover:bg-prime-dark-extra hover:text-grey-light'
      >
        { buttonInfo.text }
      </a>
    </div>
   )
}
 
export default InfoBox