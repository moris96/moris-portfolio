import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav>
            <Link to="/">About</Link>
            &nbsp; | &nbsp;
            <Link to="/projects">Projects Page</Link>
            {/* &nbsp; | &nbsp;
            <Link to="/about">About Page</Link> */}
            &nbsp; | &nbsp;
            <Link to="/contact">Contact Page</Link>
        </nav>
    )
}