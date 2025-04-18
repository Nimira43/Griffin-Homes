import Image from 'next/image'
import Link from 'next/link'
import { LiaBedSolid, LiaBathSolid, LiaRulerCombinedSolid} from 'react-icons/lia'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { MdOutlineLocationOn } from 'react-icons/md';

const PropertyCard = ({ property }) => {
  const getRateDisplay = () => {
    const { rates } = property
    if (rates.monthly) {
      return `£${rates.monthly.toLocaleString()}/monthly`
    } else if (rates.weekly) {
      return `£${rates.weekly.toLocaleString()}/weekly`
    } else if (rates.nightly) {
      return `£${rates.nightly.toLocaleString()}/nightly`
    }
  }
  
  return ( 
    <div className='rounded-xl shadow-md relative'>
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt='Rental'
        width='0'
        height='0'
        sizes='100vw'
        className='w-full h-auto rounded-t-xl'
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-prime-medium-extra'>{ property.type }</div>
          <h3 className='text-xl font-bold'>{ property.name }</h3>
        </div>
        <h3
          className='absolute top-[10px] right-[10px] bg-light px-4 py-2 rounded-lg text-prime-medium-extra font-bold text-right md:text-center lg:text-right'
        >
          {getRateDisplay()}
        </h3>

        <div className='flex justify-center gap-4 text-grey-dark mb-4'>
          <p>
            <LiaBedSolid className='md:hidden lg:inline' />{property.beds}{' '}
            <span className='md:hidden lg:inline'> Beds</span>
          </p>
          <p>
            <LiaBathSolid className='md:hidden lg:inline' />
            {property.baths}{' '}
            <span className='md:hidden lg:inline'> Baths</span>
          </p>
          <p>
            <LiaRulerCombinedSolid className='md:hidden lg:inline' />
            {property.square_feet}{' '}
            <span className='md:hidden lg:inline'> sqft</span>
          </p>
        </div>

        <div
          className='flex justify-center gap-4 text-prime-medium-extra text-sm mb-4'
        >
          <p>
            <RiMoneyPoundCircleLine className='md:hidden lg:inline' /> Weekly
          </p>
          <p>
            <RiMoneyPoundCircleLine className='md:hidden lg:inline' /> Monthly
          </p>
        </div>

        <div className='border border-prime-light mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <MdOutlineLocationOn
              className='text-prime-medium-extra mt-1'
            />
            <span className='text-prime-medium-extra'>
              {property.location.city}, {property.location.county}
            </span>
          </div>
          <Link
            href={`/properties/${property._id}`}
            className='h-[36px] bg-dark hover:bg-prime-dark-extra text-light hover:text-grey-light uppercase px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  )
}
 
export default PropertyCard