import Map from '../map/map'
import './footer.css'
export const Footer = ()=>{
    return (
        <>
         <div className="footer_container">
            <div>Store</div>
            <div className='footer_list'>
                <p>About us</p>
                <button>Products</button>
                <button>Contacts</button>
                <button>Back to Top</button>
            </div>
            <div className='footer_add'>
                <p>Contact Us</p>
               <p>ph:no - +000 1111 222</p>
              <p> Location : "Abcded"</p>
            </div>
            <Map/>
         </div>
        
        </>
    )
}