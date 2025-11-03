
const DropDown = ({data, handleClick}) => {
  return (
    <ul>
        {
            data && data.length > 0 ? data.map((item, index)=> {
                return(
                    <li key={index} onClick={()=> handleClick(index)}>{item}</li>
                )
            }): null
        }
    </ul>
  )
}

export default DropDown