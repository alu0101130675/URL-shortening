import Link from "next/link"

interface LinkListInterface {
  links:string[]
  title:string
}
export const LinkList:React.FC<LinkListInterface> = ({links,title}) => {
  return (
    <div>
      <h3 className="font-bold mb-3">{title}</h3>  
      <ul>
        {links.map(link=> 
          <li key={link}>
            <Link className="font-light" href={'#'}>{link}</Link> 
          </li>)
        }
      </ul>    
    </div>
  )

}