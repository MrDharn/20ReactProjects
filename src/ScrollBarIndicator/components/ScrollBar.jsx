import { useEffect, useState } from "react";
import '../css/scroll.css'

export default function ScrollBar({url}){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [scrollPercentage, setScrollPercentage] = useState(0)

    async function fetchData(getUrl){

        try{
            setLoading(true);
            const response = await fetch(getUrl);
            const API_DATA = await response.json();
            if(API_DATA && API_DATA.products && API_DATA.products.length>0){
                setData(API_DATA.products);
                setLoading(false);
            }

        } catch(error){
            setLoading(false);
            setError(error)

        }
    }

    const handleScroll = ()=>{
        // console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight);

        // document.body.scrollTop
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
    
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled/height) * 100)
    }

    console.log(scrollPercentage);

    useEffect(()=> {
        fetchData(url)
    }, [url]);

    useEffect(()=> {
        window.addEventListener('scroll', handleScroll);

        return ()=> {
            window.removeEventListener('scroll', {})
        }
    }, [])

    if(loading) return <div>Loading Data!! please wait </div>

    if(error !== null) <div>Data could not be loaded: {error}</div>
    return <div>
        <div className="top-container">

            <h1>Custom Scroll Indicator</h1>

            <div className="scroll-progress-tracking-con">
                <div className="current-progress-bar"
                
                style={{width: `${scrollPercentage}%`}}></div>
            </div>
        </div>
        <div className="container">
            {
               data && data.length > 0 ?  data.map((itemData, index)=>{
                return <div key={index}>
                    <img src={itemData.thumbnail} alt={itemData.name} />
                    <p>{itemData.title}</p>
                    <p>$ {itemData.price}</p>
                </div>
               }) : null
            }
        </div>
    </div>
}

