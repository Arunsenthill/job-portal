import "../style/header.css"
import logoo from "../images/img1.png"
import contact from"../images/contact.png"
import profile from "../images/profile.png"
import { Link } from "react-router-dom"


function Header() {
    return (
        <header>
            <nav>
                <header>
                    <div className="left">
                        <img src={logoo} className="imgg" />
                        <ul>
                            <li>Jobs</li>
                            <li>Boost</li>
                            <li>prep</li>
                            <li>learn</li>
                            <li>cereer Advice</li>
                            <li>certifications</li>
                        </ul>
                    </div>
                    <div className="rigth">
                        <Link to="/login" className="loginbtn">
                        <img src={contact} />
                        Login</Link>
                        <button className="registerbtn">
                        <Link to="/register" className="reg">
                            <img src={profile} />
                            Register</Link>
                        </button>
                        <div className="hr"></div>
                        <button id="emplogin">Employer Login</button>
                    </div>
                </header>

            </nav>
        </header>
    )
}

export default Header;