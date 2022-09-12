import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddCardDetails } from "../redux/persist/wallet/walletSlice";
import "./Details.css";
function Details() {
  const [count, setCount] = useState(1);
  const [date, setDate] = useState()
  const cardDetals = useSelector((state) => state.DetailsReducer.details);

    const dispatch = useDispatch()
  const handleIncriment = () => {
    setCount(count + 1);
  };
  const handleDecriment = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  const AddToCart = (elem) => {
    // if(Productcount.length>0) {
    //     const data = [...Productcount,{ ...cardDetals, count: count }];
    //     dispatch(setAddCardDetails(data))

    // }else {
        const data = { ...cardDetals, count: count, date:date };
        dispatch(setAddCardDetails(data))
    // }

  };
  return (
    <div className="Details_wrp">
      {cardDetals.image && (
        <div className="details_card">
          <div className="image_details">
            <img alt="card_image" src={cardDetals.image} />
          </div>
          <div className="all_Details">
            <h4>{cardDetals.title}</h4>
            <h6>Rating :{cardDetals.rating.rate}/5 </h6>
            <h5>{cardDetals.price} $</h5>
            <span>ex Tax: 40 $</span>
            <p>Price in reward point</p>
            <h6>Available Option</h6>
            <div className="detail_time">
              <span>* Deleviry Date </span>
              <br />
              <input type="Date" value= {date} onChange={(e)=>setDate(e.target.value)} />
            </div>
            <span className="product_count">
              {" "}
              Product Available In Stock {cardDetals.rating.count}
            </span>
            <div>
              <p className="product_count_add">
                Qnt <button onClick={handleDecriment}> - </button> {count}{" "}
                <button onClick={handleIncriment}> + </button>{" "}
                <div
                  onClick={() => AddToCart(cardDetals)}
                  className="add_cart_btn"
                >
                  {" "}
                  Add To Cart
                </div>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Details;
