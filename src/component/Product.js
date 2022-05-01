import React ,{useState,useEffect}  from "react"
import { useParams } from "react-router-dom"
export default function Product (){
    const {id}=useParams();
    const idobj=useParams();

    const [product,setproduct]=useState([]);
    const [loading ,setloading]=useState(false)
    console.log(id)
    console.log(idobj)

    useEffect(()=>{
        const getproduct=async ()=>{
            setloading(true)
            const response=await fetch(`https://fakestoreapi.com/products/${id}`)
            setproduct(await response.json())
            setloading(false)
        }
        getproduct()

    },[])

    const Loading=()=>{
        return(<>Loading.............</>)
    }
    const Showproduct=()=>{
        return(<>nothing here...............</>)
    }

    return(< div className="container">
        <div className="row">
            {loading?<Loading/>:<Showproduct/>}
        </div>
    </div>)
}