import './styles.css';

export const Navbar = () => {
  return (
    <div className="nav_Container">
      <ul className="list_Container">
        <li className="list_item">
          <a className="nav_anchor_style" href="#">
            HOME
          </a>
        </li>
        <li className="list_item">
          <a className="nav_anchor_style" href="#">
            ABOUT
          </a>
        </li>
        <li className="list_item">
          <a className="nav_anchor_style" href="#">
            CONTACT
          </a>
        </li>
        <li className="list_item">
          <a className="nav_anchor_style" href="#">
            RESUME
          </a>
        </li>
        <li className="list_item">
          <a className="nav_anchor_style" href="#">
            PROJECTS
          </a>
        </li>
      </ul>
    </div>
  );
};
