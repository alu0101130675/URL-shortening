import Image from "next/image"
import { Button } from "./Button"

interface TextImageInterface {
  mainText:string
  secondaryText:string
  imageSrc:string
  alt:string
}
export const TextImage:React.FC<TextImageInterface> = ({imageSrc,mainText,secondaryText,alt}) => {
  return(
    <div className="flex flex-col-reverse md:flex-row m-auto gap-12 md:gap-32 mt-9 w-5/6">
    <section className="flex flex-col justify-center items-center md:items-start gap-4 flex-1">
      <h1 className="text-5xl text-center md:text-left">{mainText}</h1>
      <p className="text-gray-400 text-center md:text-left">{secondaryText}</p>
      <Button rounded="full" content="Get started" backgroundFlag />        
    </section>
    <Image
    alt={alt}
    src={imageSrc}
    height={100}
    width={500}
    />
    </div>

  )

}