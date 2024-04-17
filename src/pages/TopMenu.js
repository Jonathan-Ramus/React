import { Link } from "react-router-dom"

export function TopMenu(){
    return(
        <nav>
            <ul>
                <li><Link to='/movies'>Search</Link></li>
                <li><Link to='/list'>My List</Link></li>
            </ul>
        </nav>
    )
}