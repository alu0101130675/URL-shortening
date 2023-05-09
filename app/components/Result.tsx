'use client'

import { Button } from "./Button"
interface ResultInterface {
  shortenUrl:string[][]
}
export const Result:React.FC<ResultInterface> = ({shortenUrl}) => {
  const handleCopy = (event:React.MouseEvent<HTMLButtonElement>) => {
    console.log('entre')
    const currentTarget = event.currentTarget
    const url = currentTarget.value
    currentTarget.className = currentTarget.className.replace('bg-teal-400','bg-black')
    if(shortenUrl) {
      navigator.clipboard.writeText(url)
      .then(() => currentTarget.innerText = 'Copied!' )
      .catch(err=>console.log(err))
    }
  }
  return(
    <>
      {shortenUrl.map(url => {
      return (
        <div key={url[1]} className="flex justify-between p-3 mt-2 bg-white
    rounded-2xl shadow-xl items-center w-3/4 gap-4
     ">
      <p className="flex-1">
      {url[0]}
      </p>
      <div className="w- flex gap-4 items-center flex-1 justify-end">
      <a
      className="text-teal-400"
      target="_blank"
      href={`https://${shortenUrl}`}>
        {url[1]}
        </a>
        <Button width={'1/3'} rounded="lg" value={url[1]} backgroundFlag content="Copy" action={handleCopy}/>
      </div>   
    </div>
      )
    })}
    </>


    
  )
}