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
    <div className="w-3/4">
      <form onSubmit={handleShorten}>
        <div className="bg-shortenBgDeskopt bg-indigo-950 rounded flex justify-center mt-12 p-6 gap-5">
          <input
            name="url"
            placeholder='shorten a link here' 
            className="flex-1 rounded p-2" 
            type="text" />
          <Button action={()=>{}} content="Shorten it" backgroundFlag></Button>
        </div>      
      </form>
      <Result shortenUrl={shortenUrl}/>
    </div>
  )
}