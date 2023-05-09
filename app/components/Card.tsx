import Image from "next/image"

interface CardInterface {
  title:string
  text:string
  image:string
  mt:string
}
export const Card:React.FC<CardInterface>= ({image,text,title,mt}) =>{
  return(
    <div className={`relative w-full md:w-1/3 font-bold bg-white p-6 rounded shadow-md ${mt}`}>
      <div className="absolute right-[43%] md:right-2/3 -top-[15%] bg-black rounded-full p-5">
      <Image alt="ad"
      src={image}
      width={40}
      height={40}
      />
      </div>
      <h2 className="text-xl text-center md:text-left mt-16 mb-4">
        {title}
      </h2>
      <p className="text-gray-400 text-center md:text-left font-normal ">
        {text}
      </p>
    </div>
  )
}