import "./Our.css"
import { ourproducts } from '../../data';

const Our = () => {
    return (
        <div>
           <div className="our">
            <div className="top5">
             <p>Our products</p>
            </div>
            <div className="middle5">
             <p>SALE</p>
             <p>HOT</p>
             <p>NEW ARRIVAL</p>
             <p>ACCESSORIES</p>
            </div>
            <div className="bottom5">
                <div className="m5">
                 {ourproducts.map((item)=>(
                    <div className="cards5">
                        <img src={item.img} alt="best"/>
                        <div className="content5">
                        <p>{item.title}</p>
                        <div className="details">
                            <p>{item.price}</p>
                            <div className="diveder5"></div>
                            <div className="review5">
                            <p>{item.review}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_1_120)">
                            <path d="M19.4672 23.3152L12.0002 17.8272L4.53323 23.3152L7.40023 14.4522L-0.0627747 8.99922H9.15123L12.0002 0.121216L14.8492 8.99922H24.0622L16.6002 14.4522L19.4672 23.3152Z" fill="#F5D426"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_1_120">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
                        </div>
                        
                            </div>
                            
                        </div>
                     </div>
                 ))}
                     
                 

                </div>
                 </div>
                </div>
            
            </div>
        
    );
};

export default Our;