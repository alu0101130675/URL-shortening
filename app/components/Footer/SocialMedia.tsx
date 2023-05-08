import Image from "next/image"

export const SocialMedia = () => {
  return(
    <div className="flex h-4 gap-4">
      <Image 
        alt="instagram Logo"
        src={'/icon-facebook.svg'}
        width={20}
        height={20}
      />
      <Image 
        alt="instagram Logo"
        src={'/icon-twitter.svg'}
        width={20}
        height={20}
      />
      <Image 
        alt="instagram Logo"
        src={'/icon-pinterest.svg'}
        width={20}
        height={20}
      />
      <Image 
        alt="instagram Logo"
        src={'/icon-instagram.svg'}
        width={20}
        height={20}
      />



    </div>
  )
}