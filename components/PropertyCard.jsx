import Image from 'next/image'
import Link from 'next/link'
import { LiaBedSolid, LiaBathSolid, LiaRulerCombinedSolid} from 'react-icons/lia'
import { RiMoneyPoundCircleLine } from 'react-icons/ri'
import { MdOutlineLocationOn } from 'react-icons/md';

const PropertyCard = ({ property }) => {
  
  return ( 
    <div className='rounded-xl shadow-md relative'>
      <img
        src='images/properties/a1.jpg'
        alt=''
        className='w-full h-auto rounded-t-xl'
      />
      <div className='p-4'>
        <div className='text-left md:text-center lg:text-left mb-6'>
          <div className='text-prime-medium-extra'>Apartment</div>
          <h3 className='text-xl font-bold'>Boston Commons Retreat</h3>
        </div>
        <h3
          className='absolute top-[10px] right-[10px] bg-light px-4 py-2 rounded-lg text-prime-medium-extra font-bold text-right md:text-center lg:text-right'
        >
          £4,200/mo
        </h3>

        <div className='flex justify-center gap-4 text-grey-dark mb-4'>
          <p>
            <i className='fa-solid fa-bed'></i> 3
            <span className='md:hidden lg:inline'> Beds</span>
          </p>
          <p>
            <i className='fa-solid fa-bath'></i> 2
            <span className='md:hidden lg:inline'> Baths</span>
          </p>
          <p>
            <i className='fa-solid fa-ruler-combined'></i> 1,500
            <span className='md:hidden lg:inline'>sqft</span>
          </p>
        </div>

        <div
          className='flex justify-center gap-4 text-prime-medium-extra text-sm mb-4'
        >
          <p><i className='fa-solid fa-money-bill'></i> Weekly</p>
          <p><i className='fa-solid fa-money-bill'></i> Monthly</p>
        </div>

        <div className='border border-prime-light mb-5'></div>

        <div className='flex flex-col lg:flex-row justify-between mb-4'>
          <div className='flex align-middle gap-2 mb-4 lg:mb-0'>
            <i
              className='fa-solid fa-location-dot text-lg text-prime-medium-extra'
            ></i>
            <span className='text-prime-medium-extra'> Boston MA </span>
          </div>
          <a
            href='property.html'
            className='h-[36px] bg-dark hover:bg-prime-dark-extra text-light hover:text-grey-light uppercase px-4 py-2 rounded-lg text-center text-sm'
          >
            Details
          </a>
        </div>
      </div>
    </div>
  )
}
 
export default PropertyCard