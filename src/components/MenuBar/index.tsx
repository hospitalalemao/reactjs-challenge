import { NavLink } from 'react-router-dom';

function MenuBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/brazil">Brasil</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
