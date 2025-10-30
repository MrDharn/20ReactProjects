import React, { useEffect, useState } from 'react'

const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(()=> {
        
        try{
            let currentValue = localStorage.getItem(key);
            return currentValue ? JSON.parse(currentValue) : defaultValue

        } catch(error){
            console.log(error);
            return defaultValue;
        }
    })

    console.log(value);

    useEffect(()=> {

        try{
            localStorage.setItem(key, JSON.stringify(value));

        } catch(error){
            console.log(error);
        }
    }, [key, value]) 

    return [value, setValue]
}

export default useLocalStorage