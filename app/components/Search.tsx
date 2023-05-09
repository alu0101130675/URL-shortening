'use client'
import React, {useState } from "react"
import { Button } from "./Button"
import { ApiReponse } from "@/types"
import { Result } from "./Result"
export const Search = () => {
  const initialValue = getShortenUrls()
  const [shortenUrl,setShortenUrl] = useState<string[][]>(initialValue)
  const[error,setError] = useState<string>()
  const handleShorten = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget;
    const formData = new FormData(form);
    const entries = Object.fromEntries(formData)
    const {url} = entries
    fetch(` https://api.shrtco.de/v2/shorten?url=${url}`)
    .then(async res=> { 
      if (!res.ok) {
        const response = await res.json()
        console.log(response)
        if (response.error_code === 1) {
          throw new Error('Please add a link')
        }
        else throw new Error('An error has ocurred')
      }
      return res.json()
    })
    .then(
      (data :ApiReponse) => {
        setError('')
        const newUrls = [...shortenUrl, [url as string,data.result.short_link]]
        window.localStorage.setItem('urls', newUrls.toString())
        setShortenUrl(newUrls)
        console.log(shortenUrl)
      }
    ).catch(e=>setError(e.toString()))
  }
  return(
    <div className="bg-gradient-to-b from-white from-[35px] to-gray-100 to-0%">
      <div className="w-5/6 m-auto">
      <form className="w-full md:w-3/4" onSubmit={handleShorten}>
        <div className="relative bg-shortenBgDeskopt bg-indigo-950 rounded-xl md:rounded flex md:flex-row flex-col justify-center mt-12 p-7 gap-5">
          <input
            name="url"
            placeholder='shorten a link here' 
            className={`flex-1 rounded p-2 ${error ? 'border-red-400 border-4 placeholder:text-red-400' : 'border-none text-gray-400'}`}
            type="text"
             />
            <div>
            <Button width="full" rounded="lg" content="Shorten it" backgroundFlag></Button>
            </div>
            {error && <p className="absolute top-3/4 left-7 text-red-400 font-normal italic z-10">{error}</p>}
        </div>      
      </form>
      <Result shortenUrl={shortenUrl}/>
    </div>
    </div>

  )
}

function getShortenUrls() {
  const urls = window.localStorage.getItem('urls') ?? ''
  const urlsArray = urls.split(',')
  let initialValue = []
  for (let i = 0; i < urlsArray.length - 1; i=i+2) {
    initialValue.push([urlsArray[i], urlsArray[i + 1]])
  }
  console.log(initialValue)
  return initialValue
}
