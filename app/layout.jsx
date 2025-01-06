import '@/assets/styles/globals.css'

export const metadata ={
  title: 'Unicorn Homes',
  keyword: 'Property website using Next JS'
}

const MainLayout = ({ children }) => {
  return ( 
    <html>
      <body>
        <main>
          {children}
        </main>
      </body>
    </html>
   );
}
 
export default MainLayout;