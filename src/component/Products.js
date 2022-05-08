import React, { useState, useEffect } from "react"
import Skeleton from "react-loading-skeleton"
import { Link } from "react-router-dom"
export default function Products() {
    const [data, setdata] = useState([])
    const [filter, setfilter] = useState(data)
    const [loding, setloding] = useState(false)
    let componentdidMounted = true

    useEffect(() => {
        const getproduct = async () => {
            setloding(true)
            const response = await fetch("https://fakestoreapi.com/products")
            if (componentdidMounted) {
                setdata(await response.clone().json())
                setfilter(await response.json())
                setloding(false)

            }

            return () => {
                componentdidMounted = false
            }
        }


        getproduct()

    }, [])
    const Loading = () => {
        return (
            <>
                <div>
                    <div className="col-md-3">
                        <Skeleton height={250} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={250} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={250} />
                    </div>
                    <div className="col-md-3">
                        <Skeleton height={250} />
                    </div>
                </div>


            </>
        )

    }

    const filterProduct=(cat)=>{
        const updateList=data.filter((x)=>x.category===cat)
        setfilter(updateList)

    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-4 pb-4">
                    <button className="btn btn-outline-secondary me-2" onClick={()=>{setfilter(data)}}>All</button>
                    <button className="btn btn-outline-secondary me-2" onClick={()=>{filterProduct("men's clothing")}}>Men's Cloathing</button>
                    <button className="btn btn-outline-secondary me-2" onClick={()=>{filterProduct("women's clothing")}}>Women's Cloathing</button>
                    <button className="btn btn-outline-secondary me-2" onClick={()=>{filterProduct("jewelery")}}>jewelery</button>
                    <button className="btn btn-outline-secondary me-2" onClick={()=>{filterProduct("electronics")}}>Electronics</button>
                </div>
                {filter.map((product) => {
                    return (
                        <>
                            <div className="col-md-3">
                                <div className="card h-100 text-center p-4" key={product.id} >
                                    <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text fw-bold">${product.price}</p>
                                        <Link to={`/product/${product.id}`} className="btn  btn-outline-secondary">Buy Now</Link>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }

    return (<div className="container " style={{marginTop:"80px"}}>
        <div className="row">
            <div className="col-12 mb-1">
                <h1 className="display-6 fw-bolder text-center">Letest products</h1>
                <hr />
            </div>
        </div>
        <div className="row justify-content-center">
            {loding ? <Loading /> : <ShowProducts />}
        </div>
    </div>)
}