import MenuList from "./MenuList.jsx"
import '../css/Menu.css'

 function Menu({list = []}){
    return(
        <ul className="list-container"> 
            {
                list && list.length > 0 ? 
                list.map((item, index) => {
                    return <MenuList list={item} key={index} />
                })
                : null
            }    


  
        </ul>
    )

}


export default Menu