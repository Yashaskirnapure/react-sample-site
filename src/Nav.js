import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <nav className="Nav">
      <div className="logo">
        <img src={require("./images/logo.jpg")} alt="logo" />
      </div>
        <Link to='/'>Home</Link>
        <Link to='/members'>Members</Link>
        <Link to='/about'>About</Link>
        <Link to='/feedback'>Feedback</Link>
    </nav>
  )
}

export default Nav