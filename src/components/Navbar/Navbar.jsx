import List from "../list/List";
import "./Navbar.css";
const Navbar = () => {
    let dropdown = [
        {   
            id: 1,
            name : 'Home',
            path : '/',
            sub:[{
                pageName : "Home",
                path : "/"
            },{
                pageName : "MainPage",
                path : "/mainPage"
            }]
        }
    ]
    return (
        <>
        <ul className="d-flex navbar">
            <li className="dropdown">
            <a href="#">Home</a>
            <div className="submenu">
                <List menu={dropdown} />
            </div>
            </li>
            <li className="dropdown">
            <a href="#">Service</a>
            <div className="submenu">
                <List menu={dropdown} />
            </div>
            </li>
            <li>
            <a href="#">About</a>
            </li>
            <li className="dropdown">
            <a href="#">Pages</a>
            <div className="submenu">
                <List menu={dropdown} />
            </div>
            </li>
            <li className="dropdown">
            <a href="#">Blocks</a>
            <div className="submenu">
                <List menu={dropdown} />
            </div>
            </li>
            <li>
            <a href="#">Contact</a>
            </li>
        </ul>
        </>
    );
};
export default Navbar;
