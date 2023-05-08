import { Footer } from './components/Footer/Footer'
import { Navbar } from './components/Navbar'
import './globals.css'
import { Inter,Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight:['700','100','200','400','300','500','600'], subsets: ['latin'] })

export const metadata = {
  title: 'url shorter',
  description: 'url shorter to learn next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
