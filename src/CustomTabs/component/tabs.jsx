import CustomTab from "./CustomTab"


export default function TabTest(){

    const handleChange = (currentIndex)=> {
        console.log(currentIndex)
    }

    const RandomComponent=()=> {
        return <div>Random Component</div>
    }
    const tabs = [
       {
           label: 'Tab 1',
           content: 'This is Tab 1'
       },
       {
           label: 'Tab 2',
           content: 'This is Tab 2'
       },
       {
           label: 'Tab 3',
           content: <RandomComponent/>
       }
    ]

    return <CustomTab tabsContent={tabs} onChange={handleChange}/>
}