import { Link } from "react-router-dom";
import emty_card from "../images/emty_card_1.jpg";
export default function EmtyCard() {
  return (
    <>
      <div className="card_main ">
        <div
          className="left_div 
"
        >
          <div>
            <h1>My Card()</h1>
            <hr />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div>
              <img
                src={emty_card}
                alt="nothing"
                style={{ height: "300px", width: "350px" }}
              />
              <h2 style={{ textAlign: "center" }}>Your cart is empty!</h2>
              <p style={{ textAlign: "center" }}>Add items to it now.</p>
              <div style={{ textAlign: "center" }}>
                  <Link to="/products" className="btn btn-secondary btn-outline-dark" >shop now</Link>

              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
