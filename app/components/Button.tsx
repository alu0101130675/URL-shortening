interface ButtonInterface {
  content:string
  backgroundFlag?:boolean
  action?:()=>void
}
export const Button:React.FC<ButtonInterface> = ({content,backgroundFlag=false,action})=> {
  return (
  <button className={
    ` py-2 px-6 rounded-full
    ${backgroundFlag ? 'bg-teal-400' : 'bg-white'}
    ${backgroundFlag ? 'text-white' : 'text-gray-400'}
    `}
    onClick={action}
    >
    {content}
  </button>)
}