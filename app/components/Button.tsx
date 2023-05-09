interface ButtonInterface {
  content:string
  backgroundFlag?:boolean
  action?:(event:React.MouseEvent<HTMLButtonElement>)=>void
  width?:string
  value?:string
  rounded?:string
}
export const Button:React.FC<ButtonInterface> = ({content,width,backgroundFlag=false,action,value,rounded})=> {
  console.log( `${rounded ? `rounded-${rounded}` : ''}`)
  return (
  <button className={
    `py-2 px-6
    hover:opacity-30
    ${backgroundFlag ? 'bg-teal-400' : 'bg-white'}
    ${backgroundFlag ? 'text-white' : 'text-gray-400'}
    ${width ? `w-${width}` : ''}
    ${rounded ? `rounded-${rounded}` : ''}`
  }
    onClick={action}
    value={value}
    >
    {content}
  </button>)
}