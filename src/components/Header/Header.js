import { Link } from "react-router-dom"
import './Header.css'
const Header = () =>{
    return (
        <ul className="header">
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
        </ul>
    )
}

export default Header