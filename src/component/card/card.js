import "./card.css";
import sel1 from "../../assests/sel1.jpg"
const Card = ()=>{
    return (
        <>
            <div className="card_container">
                <img className="card_img" src={sel1} ></img>
                <p>Text</p>
                <button>Check</button>
            </div>
        </>
    )
}

export default Card;