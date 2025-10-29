import Menu from './Components/Menu.jsx'
import './css/App.css'


function App({menus}) {
 return (
  <div className="menu-container">
    <Menu list={menus}/>
  </div>
 )
}

export default App
