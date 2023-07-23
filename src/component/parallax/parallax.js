import "./parallax.css"
import sel from "../../assests/sel1.jpg"
const Parallax = ()=>{
    return(
        <>
        <div className="parallax_container">
            <div className="parallax" style={{backgroundImage:`url(${sel})`}}>
            <div className="parallax_text">
            This div is just here to enable scrolling.
            Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>
           </div>
        </div>
        </>
    )
}
export default Parallax;