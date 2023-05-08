'use client'
import ClipboardSvg from "./svg/ClipboardSvg"
import { CloseSvg } from "./svg/CloseSvg"

interface ResultInterface {
  shortenUrl:string[][]
}
export const Result:React.FC<ResultInterface> = ({shortenUrl}) => {
  const handleCopy = (event:React.MouseEvent<HTMLButtonElement>) => {
    const url = event.currentTarget.value
    if(shortenUrl) {
      navigator.clipboard.writeText(url)
      .then()
      .catch(err=>console.log(err))
    }
  }
  return(
    <>
      {shortenUrl.map(url => {
      return (
        <div key={url[1]} className=" flex justify-between m-auto p-3 my-2 bg-white
    rounded-2xl shadow-xl items-center
     ">
        {url[0]}
      <div className=" flex gap-4 items-center">
      <a
      className="text-teal-400 "
      target="_blank"
      href={`https://${shortenUrl}`}>
        {url[1]}
        </a>
        <button value={url[1]} className="" onClick={handleCopy}>
         Copy
         </button>
      </div>   
    </div>
      )
    })}
    </>


    
  )
}