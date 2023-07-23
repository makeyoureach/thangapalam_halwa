
import { Link } from "react-router-dom";
import "./header.css"
const Header = ()=>{
    function scrollTo(id) {
        document.getElementById(id).scrollIntoView();
      }
    return(
        <>
            <div className="head_container">
               <div>Store</div>
                <div className="head_list">
                   <Link to='/'>Home</Link>
                   <Link to='/about'>About us</Link>
                   <Link to='/products' >Product</Link>
                   <Link to='/contact'>Contact</Link>
                   <div>Cart</div>
                </div>
            </div>
        </>
    )
}
export default Header;