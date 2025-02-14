import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return ( 
    <section>
      <div className='container-xl lg:container m-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
          <InfoBox
            heading='For Renters'
            buttonInfo={{
              text: 'Check Properties',
              link: '/properties'
            }}
          >
            Discover your ideal rental property. Save your favourite listings and get in touch with the owners.
          </InfoBox>
          <InfoBox
            heading='For Property Owners'
            buttonInfo={{
              text: 'Add Property',
              link: '/properties/add'
            }}
          >
            Showcase your properties and attract potential tenants. Rent out your space as a holiday let or opt for long-term leasing.
          </InfoBox>                 
        </div>
      </div>
    </section>
  )
}
 
export default InfoBoxes

        
        