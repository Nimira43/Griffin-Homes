import Link from 'next/link'

const HomePage = () => {
  return ( 
    <div>
      <h1 className='text-3xl'>Griffin Homes</h1>
      <Link href='/properties'>Go to Properties</Link>
    </div>
  )
}
 
export default HomePage