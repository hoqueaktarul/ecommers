import "../style/card.css";
import { useSelector } from "react-redux";
import rupee_logo from "../images/rupee_logo.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { delCard, addCard, alldelCard ,delcardfull} from "../Redux/action";
import EmtyCard from "./EmtyCard";
import { useState } from "react";


function Car() {
  const[url,seturl]=useState("")
  const state = useSelector((state) => state.handleCard);
  let totalprice = 0;
  state.map((item) => (totalprice = totalprice + item.price * item.qty));
  const dispach = useDispatch();
  const dellProduct = (product) => {
    dispach(delCard(product));
  };
  const addProduct = (product) => {
    dispach(addCard(product));
  };
  const delcardfu=(product)=>{
    dispach(delcardfull(product))
  }
  const alladdProduct = () => {
    dispach(alldelCard());
  };



  return (
    <div style={{ marginTop: "73px" }}>
      {state.length === 0 ? (
        <EmtyCard />
      ) : (
        <div className="card_main ">
          <div
            className="left_div .scrollbar-near-moon
"
          >
            <div>
              <h1>My Card({state.length})</h1>
              <hr />
            </div>
            <div>
              {state.map((item) => {
                return (
                  <>
                    <div className="card_item_cantainer">
                      <div className="card_item_cantainer_up">
                        <div className="card_item_cantainer_up_left">
                          <Link to={url}  >
                          <img
                            className="card_item_img"
                            src={item.image}
                            alt="empty"
                            onClick={()=>{seturl(`/product/${item.id}`)}}
                          /></Link>
                        </div>
                        <div className="card_item_cantainer_up_right">
                          <div>
                            <h2>{item.title}</h2>
                          </div>
                          <div className=" card_item_cantainer_up_right_price">
                            <img
                              className="card_item_cantainer_up_right_rupe_logo"
                              src={rupee_logo}
                              alt="images not found"
                            />
                            <h3>{item.price}</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card_item_cantainer_down">
                        <div className="card_item_cantainer_down_left">
                          <button
                            className="card_item_cantainer_down_left_input btnn"
                            onClick={() => {
                              addProduct(item);
                            }}
                          >
                            +
                          </button>
                          <p className="card_item_cantainer_down_left_input input">
                            {item.qty}
                          </p>

                          <button
                            className="card_item_cantainer_down_left_input btnn"
                            onClick={() => {
                              if (item.qty === 1) {
                              } else {
                                dellProduct(item);
                              }
                            }}
                          >
                            -
                          </button>
                        </div>
                        <div className="card_item_cantainer_down_right">
                          <button
                            className="remove_button"
                            onClick={() => {
                              delcardfu(item);
                            }}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="right_div">
            <div className="right_div_top">
              <h2>Price details(20% OFF)</h2>
            </div>
            <div className="right_div_middle">
              <h3>Total Items:{state.length}</h3>
              <h3> Price:{totalprice}</h3>
              <h3> Discount:{Number(totalprice * 0.2)}</h3>
            </div>
            <hr />
            <div className="right_div_top">
              <h1>Total={totalprice - totalprice * 0.2}</h1>
            </div>
            <div className="button2div">
              <Link
                className="placeorder "
                to="/"
                onClick={() => {
                  alladdProduct();
                  alert("thank you ,")
                }}
              >
                Place Order
              </Link>
              <Link className="placeorder" to="/products">
                buy more
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Car;
