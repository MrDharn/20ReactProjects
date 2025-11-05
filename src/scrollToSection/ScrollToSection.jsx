import { useRef } from 'react'
import {data} from './data.js'
import './scrollToSection.css'

export default function ScrollToSection(){
    
    const ref = useRef([]);

    const handleScroll= (getId)=> {

        ref.current[getId].scrollIntoView({behavior: 'smooth'})
    }



    return(
        <>
            <div className='nav-container'>

                {data.map((label, index) => {
                    return <div key={index} >
                        
                        <nav>
                            <li onClick={()=> handleScroll(index)}>{label.label}</li>
                        </nav>
                    </div>
                })}
            </div>
            {
                data.map((label, index)=> {
                    return <main style={label.style} key={index} ref={(el)=> ref.current[index] = el}>
                            <h1>{label.label}</h1>
                        </main>
                })
            }
        </>
    )
}