'use client'
import React, { FormEvent, useState } from "react"
import { Button } from "./Button"
import { ApiReponse } from "@/types"
import { Result } from "./Result"
export const Search = () => {
  const [shortenUrl,setShortenUrl] = useState<string[][]>([])
  const handleShorten = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData)
    const {url} = entries
    fetch(` https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(res=>res.json().then(
      (data :ApiReponse) => {
        setShortenUrl([...shortenUrl, [url as string,data.result.short_link]])
        console.log(shortenUrl)
      }
    ))
  }
  return(
    <div className="bg-gradient-to-b from-white from-[35px] to-gray-100 to-0%">
      <div className="w-5/6 m-auto">
      <form className="w-full sm:w-3/4" onSubmit={handleShorten}>
        <div className="w- bg-shortenBgDeskopt bg-indigo-950 rounded-xl sm:rounded flex sm:flex-row flex-col justify-center mt-12 p-7 gap-5">
          <input
            name="url"
            placeholder='shorten a link here' 
            className="flex-1 rounded p-2" 
            type="text" />
            <div>
            <Button width={'full'} content="Shorten it" backgroundFlag></Button>
            </div>
        </div>      
      </form>
      <Result shortenUrl={shortenUrl}/>
    </div>
    </div>

  )
}