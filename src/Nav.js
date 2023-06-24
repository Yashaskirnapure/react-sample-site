import { Link } from "react-router-dom";
import './nav.css';

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="logo">
        <img src={require("./images/logo.jpg")} alt="logo" />
      </div>
        <Link to='/'>Home</Link>
        <Link to='/members'>Members</Link>
        <Link to='/feedback'>Feedback</Link>
        <div class="hamburger">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
    </nav>
  )
}

export default Nav