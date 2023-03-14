<<<<<<< HEAD
import NavBar from './NavBar';
import './Header.css'

const Header = () =>{
    return (
        <div>
        <NavBar>
        </NavBar>
      </div>
=======
import { Link } from "react-router-dom"
import './Header.css'
const Header = () =>{
    return (
        <ul className="header">
            <li> <Link to='/about'>About</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
        </ul>
>>>>>>> refs/remotes/origin/main
    )
}

export default Header