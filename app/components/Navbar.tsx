import Image from "next/image"
import Link from "next/link"
import { Button } from "./Button"

export const Navbar = () => {
  return(
    <nav className=" font-bold flex flex-row m-auto justify-evenly mt-9 w-5/6">
      <section className="flex flex-row flex-1 gap-6 text-gray-400">
      <div>
      <Image
      alt="logo"
      src='/logo.svg'
      width={100}
      height={80}
      />
      </div>

      <Link href={'#'}>Features</Link>
      <Link href={'#'}>Pricing</Link>
      <Link href={'#'}>Resources</Link>
      </section>
      <section className="flex flex-row flex-1 gap-4 justify-end">
      <Button content='Login'/>
      <Button content='Sign up' backgroundFlag={true}/>
      </section>
    </nav>
  )
}