import loginimg from "../images/login_logo.png"
import registerimg from "../images/register_logo.png"
import cartimg from "../images/cart_logo.png"
import "../style/navbar.css"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
export default function Navber() {
  const state=useSelector((state)=>state.handleCard)

  return (<div>
    <nav id="navbar_top" className="navbar navbar-expand-lg fixed-top navbar-light bg-secondary ">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-2" to="/">Vozet Collection</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="products">product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="about">about</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link fw-bold" to="contact">contact</Link>
            </li> */}
          </ul>
          <div className="buttons">
            <Link to="login" className="btn  me-2 fw-bold border-0 nav_btn"><img className="navlogo" src={loginimg} alt="error"/>log in</Link>
            <Link to="register" className="btn  me-2 fw-bold border-0"><img className="navlogo" src={registerimg} alt="error"/>register</Link>
            <Link to="card" className="btn  me-2 fw-bold border-0"><img className="navlogo" src={cartimg} alt="error"/>card({state.length})</Link>
          </div>

        </div>
      </div>
    </nav>
  </div>)
}