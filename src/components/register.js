import "../style/register.scss"
import contact from"../images/contact.png"
import { Link } from "react-router-dom"
function Register(){
    return (
        <div className="regis">
        <div className="reg">
            <div className="logimg">
                <Link to="/login">
                <img src={contact} />
                   Login</Link>
            </div>
        </div>
        <div className="Regesterr">
                <form>
                    <label>Name : </label><input type="name" placeholder="Enter Your Name"></input>
                    <label>Mail id : <input type="email" placeholder="Enter Your Name"></input></label>
                    
                    <label>Password : <input type="password" placeholder="Enter Your Password"></input></label>
                    
                    <label>contact : <input type="number" placeholder="Enter a Phone Number"></input></label>
                </form>
                <div className="singbt">
                    <Link to="/"><span>Sigin</span></Link>
                    <div className="forget"> 
                        <Link to="/fpassword"><p>Forget Password</p>
                        </Link>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Register;