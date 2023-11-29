import "./Best.css";
import { bests } from "../../data";

const Best = () => {
    return (
        <div>
            <div className="best">
                <div className="top4">
                 <p>Best selling</p>
                 <p>Get in on the trend with our curated selection of best-selling styles.</p>
                </div>
                <div className="middle4">
                 {bests.map((item)=>(
                    <div className="cards4">
                        <img src={item.img} alt="best"/>
                        <div className="content4">
                        <p>{item.title}</p>
                        <div className="details">
                            <p>{item.price}</p>
                            <div className="diveder4"></div>
                            <div className="review4">
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
                <div className="bottom4">
                     <button>See all &rarr;</button>
                </div>
            </div>
        </div>
    );
};

export default Best;