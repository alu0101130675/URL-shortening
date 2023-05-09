import Image from "next/image"
import { LinkList } from "./LinkList"
import { SocialMedia } from "./SocialMedia"
export const Footer = () => {
  return(
    <footer className="bg-black text-white">
      <div className="flex w-5/6 items-center md:items-start flex-col md:flex-row md:justify-between m-auto py-12">
        <div className="mb-10 md:mb-0">
          <Image 
            alt="logo"
            src='/whiteLogo.svg'
            width={80}
            height={60}
          />
        </div> 
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 text-center md:text-left">
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