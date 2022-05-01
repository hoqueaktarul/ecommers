import "../style/home.css"
import men_home from '../images/men_home_final.png'
import Products from "./Products"
export default function Home() {
    return (
        <div className="hero home_main">
            <div className="home_slider  mt-100">
                <div className="card bg-dark text-white border-0 card_home  ">
                    <img src={men_home} className="card-img" alt="error" height="350px" />
                    <div className="card-img-overlay ">


                    </div>
                </div>
            </div>
            <Products />


        </div>)
}