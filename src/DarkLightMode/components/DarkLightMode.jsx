import useLocalStorage from './useLocalStorage'
import './../css/DarkLight.css'

const DarkLightMode = () => {
    const [theme, setTheme] = useLocalStorage('theme', 'dark');

    const handleLightDarkMode= ()=>{
        setTheme(theme === 'light' ? 'dark': 'light');
    }

    console.log(theme)

  return (
    <div className={`light-dark-mode ${theme}`} data-theme = {theme}>
        <div className="container">
            <p>Hello Dharn!</p>
            <button onClick={handleLightDarkMode}>Change Theme</button>
        </div>
    </div>
  )

}

export default DarkLightMode