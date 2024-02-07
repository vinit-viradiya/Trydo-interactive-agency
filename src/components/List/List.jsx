import { NavLink } from "react-router-dom";
import "./List.css";
const List = ({ menu }) => {
    return (
        <ul key={menu[0].id}>
        {menu[0].sub.map((item, index) => {
            return (
            <NavLink key={index} to={item.path}>
                {item.pageName}
            </NavLink>
            );
        })}
        </ul>
    );
};
export default List;
