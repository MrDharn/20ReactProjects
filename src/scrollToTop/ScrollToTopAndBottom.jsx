import React, { useRef } from 'react'
import useFetch from '../useFetchCustomHook/UseFetch'
import './scroll.css'

const ScrollToTopAndBottom = () => {
    const {data, error, loading} = useFetch('https://dummyjson.com/products?limit=100', {});

    const bottomRef = useRef(null);


    function handleScrollToTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }
    function handleScrollToBottom(){
       bottomRef.current.scrollIntoView({behavior: 'smooth'});
    }

    if(loading){
        return <h1>Loading please Wait !!!</h1>
    }

    if(error !== null){
        return <h1>Data could not be fetched!!{error}</h1>
    }



  return (
    <div className='scroll-container'>
        <h1>Scroll To Top and Bottom</h1>
        <h3>This is the top Section</h3>
        <button className='scroll-btn' onClick={handleScrollToBottom}>scroll to Bottom</button>
        <ul className='scroll-ul'>
            {data && data.products && data.products.length> 0 ? data.products.map((item, index)=> {
                return (
                    <li key={index} className='item-list'>{item.title}</li>
                )
            }): <div>I did not see the data</div>}
        </ul>

        <button className='scroll-btn' onClick={handleScrollToTop}>Scroll to top</button>
        <div className='scroll-bottom' ref={bottomRef}>
            <h3>This is the bottom of the page</h3>

        </div>
    </div>
  )
}

export default ScrollToTopAndBottom