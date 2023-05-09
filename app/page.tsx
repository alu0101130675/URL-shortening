import { TextImage } from './components/TextImage'
import { Search } from './components/Search'
import { Card } from './components/Card'
import { Button } from './components/Button'

export default function Home() {
  return (
    <main className='m-auto font-bold'>
      <TextImage
        alt='una' 
        imageSrc='/illustration-working.svg' 
        mainText='More than just shorter links'
        secondaryText='Build your brand´s recognition and get detailed insights on how your links are performings'
      />
      <Search/>
        <div className='bg-gray-100 pt-24 relative -z-40'>
          <h2 className='bg-gray-100 text-center text-3xl'>Advanced Statistics</h2>
          <p className=' bg-slate-100 text-center text-gray-400 w-1/2 m-auto mt-2'>
            Track how your links are performing across the web with our advanced statistics dashboard
          </p>
          <div className='relative flex flex-col md:flex-row w-5/6 m-auto gap-6 mt-20 mb-20 items-center'>
            <Card 
              image='/icon-brand-recognition.svg' 
              text=
              'Boast your recognition with cach link.Generic links don´t mean a thing.Branded links help instil cofidence in your content.'
              title='Brand recognition'
              mt='mt-[0px]'
            />
            <Card 
              image='/icon-detailed-records.svg' 
              text=
              'Gain insights into who is clicking your links.Knowing when and where people engage with your content helps inform better decisions.'
              title='Detailed Records'
              mt='mt-[26px]'
            />
            <Card 
              image='/icon-fully-customizable.svg' 
              text=
              'Improve brand and awarness and content discoverability through customizable links,supercharging audience engagement.'
              title='Fully customizable'
              mt='mt-[52px]'
            />
             <div className='md:h-2 bg-teal-400 absolute -z-10 md:top-1/2 md:w-full h-full w-2 md:right-0 right-1/2 top-0'/> 
          </div>  
       </div>
       <div className=' bg-boostBgDeskopt bg-indigo-950  text-center p-12 text-white'>
          <h2 className='text-3xl mb-5'>Boost your links today</h2>
          <Button rounded='full' content='Get started' backgroundFlag />
        </div>    
    </main>
  )
}
