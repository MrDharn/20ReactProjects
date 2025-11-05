import { createContext, useEffect, useState } from "react";
import featureFlagDataService from "../data";

export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobal({children}){

    const [loading, setLoading] = useState(false)
    const [enabledFlags, setEnabledFlags] = useState({});

    async function fetchFeatureFlag(){
        try{
            setLoading(true);
            const response = await featureFlagDataService();
            setEnabledFlags(response)
            setLoading(false);
        } catch(e){
            console.log(e)
            setLoading(false);
            throw new Error(e)
        }
    }
    useEffect(()=>{
        fetchFeatureFlag()
    },[])
    
    return(
        <FeatureFlagContext.Provider value={{enabledFlags, loading}}>
            {children}

        </FeatureFlagContext.Provider>
    )
}