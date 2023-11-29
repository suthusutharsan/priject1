import "./Designer.css";

const Designer = () => {
    return (
        <div>
            <div className="designer">
                <div className="top7">
                  <p>Designer Clothes For You</p>
                  <p>Immerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
                </div>
                <div className="bottom7">
                 <div className="cards7">
                    <div className="card7">
                        <img src="/images/designer1.png" alt="" />
                      <p>Accessories</p>
                      <p> Complete your ensemble with <br/>designer accessories such as<br/> handbags, scarves, belts, and hats.</p>
                    </div>
                    <div className="card7">
                        <img src="/images/designer2.png" alt="" />
                        <p>Dresses</p>
                        <p>Explore a  stunning range of designer<br/>dresses, including evening gowns<br/>and chic day dresses.</p>
                    </div>
                    <div className="card7">
                        <img src="/images/designer3.png" alt="" />
                        <p>Outerwear</p>
                       <p>Browse luxurious designer coats,<br/> jackets, and blazers to stay stylishly<br/> warm during colder seasons.</p>
                    </div>
                 </div>

                </div>
            </div>
        </div>
    );
};

export default Designer;