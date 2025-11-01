import { useState } from "react";
import '../css/CustomTab.css'
export default function CustomTab({tabsContent, onChange}){

    const [currentTabIndex, setCurrentIndexTab] = useState(0);

    function handleOnClick(id) {
        setCurrentIndexTab(id);
        onChange(id);
    }
    return(
        <div className="wrapper">
            <div className="heading">
                {
                    tabsContent.map((tabItem, index)=> {
                        return <div key={index} onClick={()=> handleOnClick(index)}>
                            <span className={`label ${currentTabIndex === index ? 'active' : ''}`}>{tabItem.label}</span>
                        </div>
                    })
                }
            </div>

            <div className="content">
                {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
            </div>
        </div>
    )

}