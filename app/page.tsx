import Image from 'next/image'
import { Navbar } from './components/Navbar'
import { TextImage } from './components/TextImage'
import { Search } from './components/Search'
import { Card } from './components/Card'
import { Button } from './components/Button'

export default function Home() {
  return (
    <main className='m-auto font-bold'>
      <div className='relative z-10 h-[1288px] '>
        <TextImage
          alt='una' 
          imageSrc='/illustration-working.svg' 
          mainText='More than just shorter links'
          secondaryText='Build your brand´s recognition and get detailed insights on how your links are performings'
        />
         <div className='w-5/6 m-auto '>
            <Search/>
          </div>
      </div>
      <div className='bg-slate-100 absolute top-[93%] w-full -z-50}'>
          <h2 className='text-center mt-32 text-3xl'>Advanced Statistics</h2>
          <p className='text-center text-gray-400 w-1/2 m-auto mt-2'>
            Track how your links are performing across the web with our advanced statistics dashboard
          </p>
          <div className='flex w-5/6 m-auto gap-6 relative z-10 mt-20 mb-20'>
            <Card 
              image='/icon-brand-recognition.svg' 
              text=
              'Boast your recognition with cach link.Generic links don´t mean a thing.Branded links help instil cofidence in your contentet'
              title='Brand recognition'
              mt='mt-[0px]'
            />
            <Card 
              image='/icon-detailed-records.svg' 
              text=
              'Boast your recognition with cach link.Generic links don´t mean a thing.Branded links help instil cofidence in your contentet'
              title='Brand recognition'
              mt='mt-[26px]'
            />
            <Card 
              image='/icon-fully-customizable.svg' 
              text=
              'Boast your recognition with cach link.Generic links don´t mean a thing.Branded links help instil cofidence in your contentet'
              title='Brand recognition'
              mt='mt-[52px]'
            />
             <div className='h-2 bg-teal-400 absolute top-1/2 -z-10 w-full'/> 
          </div>  
              <div className=' bg-boostBgDeskopt bg-indigo-950  text-center p-12 text-white'>
            <h2 className='text-3xl mb-5'>Boost your links today</h2>
            <Button content='Get started' backgroundFlag />
        </div>    
       </div>
    </main>
  )
}
