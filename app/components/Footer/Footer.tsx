import Image from "next/image"
import { LinkList } from "./LinkList"
import { SocialMedia } from "./SocialMedia"
export const Footer = () => {
  return(
    <footer className="bg-black text-white">
      <div className="flex w-5/6 items-center sm:items-start flex-col sm:flex-row sm:justify-between m-auto py-12">
        <div className="mb-10 sm:mb-0">
          <Image 
            alt="logo"
            src='/whiteLogo.svg'
            width={80}
            height={60}
          />
        </div> 
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-12 text-center sm:text-left">
        <LinkList 
            links={['Links Shortering','Branded Links', 'Analytics']}
            title="Features"
          />     
          <LinkList 
            links={['Blog','Developers', 'Support']}
            title="Resources"
          />    
          <LinkList 
            links={['About','Our Team', 'Careers','Contact']}
            title="Company"
          />
        <SocialMedia/>  
        </div>
      </div> 
    </footer>
  )
}