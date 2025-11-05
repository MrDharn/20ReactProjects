import React from 'react'
import useWindowResize from './WindowResize'
import './window.css'

const WindowResizeDisplay = () => {
    const windowSize = useWindowResize()
    const {width, height} = windowSize;
  return (
    <div className='container'>
        
       <h1> Use Window Resize Hook</h1>
       <p>
        width: {width}px
       </p>
       <p>
        height: {height}px
       </p>
        
    </div>
  )
}

export default WindowResizeDisplay