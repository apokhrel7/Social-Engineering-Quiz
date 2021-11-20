import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="link">
        Home Page{" "}
      </Link>
      <hr className="divider" />
    </div>
  );
};
export default Header;
