import { Link } from "react-router-dom"
import './NavBar.css'
const NavBar = () =>{
    return (
        <ul className="navbar">
            <li> <Link to ='/'>Home</Link></li>
            <li> <Link to='/projects'>Projects</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
        </ul>
    )
}

export default NavBar;
