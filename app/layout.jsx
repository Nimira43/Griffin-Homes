import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata ={
  title: 'Griffin Homes',
  keyword: 'properties, home, real estate, house, flat, apartment, rental',
  description: 'Property website using Next JS'
}

const MainLayout = ({ children }) => {
  return ( 
    <html>
      <body> 
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
   )
}
 
export default MainLayout