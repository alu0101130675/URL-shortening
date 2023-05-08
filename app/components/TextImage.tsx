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
    <div className="flex flex-row m-auto gap-32 mt-9 w-5/6">
    <section className="flex flex-col justify-center gap-4 flex-1">
      <h1 className="text-5xl">{mainText}</h1>
      <p className="text-gray-400">{secondaryText}</p>
      <div className="w-2/3">
      <Button content="Get started" backgroundFlag />        
      </div>
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