import './404.css';
import { Link } from "react-router-dom"

const About = () => {
    return <div> <h1>The page you're looking for doesn't exist</h1>
    <Link to={'/'}>Got to home page</Link>
    </div>

}



export default About