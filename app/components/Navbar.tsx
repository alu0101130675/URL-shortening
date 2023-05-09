import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"
import { HamburgerSvg } from "./svg/HamburgerSvg"

export const Navbar = () => {
  return(
    <nav className="font-bold w-5/6 mt-9 m-auto">
      <div className="flex flex-row items-start gap-8 md:items-center justify-between md:justify-start ">
      <div className="w-fit align-middle">
      <Image
      alt="logo"
      src='/logo.svg'
      width={100}
      height={80}
      />
      </div>
       <label className="flex flex-1 flex-col md:flex-row justify-between items-end text-right cursor-pointer">
        <div className="md:hidden">
        <HamburgerSvg/>
        </div>
        <input className="peer" hidden type="checkbox"/>
        <div className="hidden md:flex peer-checked:flex items-center  flex-1  flex-col md:flex-row text-right ">
      <section className="flex items-center md:justify-start flex-col flex-1 md:flex-row gap-6 text-gray-400">
      <Link className="hover:text-black" href={'#'}>Features</Link>
      <Link className="hover:text-black" href={'#'}>Pricing</Link>
      <Link className="hover:text-black" href={'#'}>Resources</Link>
      </section>
      <section className="flex w-fit flex-col md:flex-row gap-4 justify-end">
      <Button rounded="full" content='Login'/>
      <Button rounded="full" content='Sign up' backgroundFlag={true}/>
      </section>
      </div>
      </label>
      </div>    
    </nav>
  )
}