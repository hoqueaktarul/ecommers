import React ,{useState,useEffect}  from "react"
import { useParams ,Link } from "react-router-dom"
import star_logo from '../images/star_logo.png'
import rupee_logo from '../images/rupee_logo.png'
import { useDispatch } from "react-redux"
import { addCard } from "../Redux/action"
import Skeleton from "react-loading-skeleton"

export default function Product (){
    const {id}=useParams();

    const [product,setproduct]=useState([]);
    const [loading ,setloading]=useState(false)
    const dispach=useDispatch();
    const addProduct=(product)=>{
        dispach(addCard(product))
    }
   

    useEffect(()=>{
        const getproduct=async ()=>{
            setloading(true)
            const response=await fetch(`https://fakestoreapi.com/products/${id}`)
            setproduct(await response.json())
            setloading(false)
        }
        getproduct()

    },[id])

    const Loading=()=>{
        return(<><Skeleton height={"350px"} width="80%"/></>)
    }
    const Showproduct=()=>{
        return(<>
        <div className="col-md-6">
            <img src={product.image} alt={product.title} height="400px" width="400px"/>
        </div>
        <div className="col-md-6">
            <h4 className="text-uppercase text-black-50">{product.category}</h4>
            <h1 className="display-5">{product.title}</h1>
            <p className="lead fw-bolder">
                Rating {product.rating && product.rating.rate}{" "}
                <img src={star_logo} width="20px" height="20px" alt="images not found" />
            </p>
            <h3 className="display-6 fw-bold my-4"><img className="" src={rupee_logo} alt="images not found" height="35px" width="35px"/>{product.price} </h3>
            <p className="lead" >{product.description}</p>
            <button className="btn  btn-info btn-outline-primary px-4 py-2  border-0" onClick={()=>addProduct(product)}>Add to Card</button>
            <Link to="/card" className="btn btn-info btn-outline-primary ms-2 px-3 py-2">go to Card</Link>

        </div>
        </>)
    }

    return(< div className="container py-5" style={{marginTop:"80px"}}>
        <div className="row py-4">
            {loading?<Loading/>:<Showproduct/>}
        </div>
    </div>)
}