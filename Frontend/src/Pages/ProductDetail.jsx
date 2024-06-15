import React from 'react';

import axios from "axios";
import { useState,useEffect } from "react";
import { useParams } from 'react-router-dom';
import Shop from './Shop';
import {addtocart} from "./ProductSlice"
import { useSelector,useDispatch } from "react-redux";
const ProductDetail = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    const [input ,setinput]=useState({});

    const {id}=useParams()
    const UpdatedataLoad= async()=>{
      console.log(id);
      await axios
      .post("http://localhost:8000/Admin/UpdatedataLoad",{id:id})
      .then(res =>{
        console.log(res.data);
        setinput(res.data)})
        }
         useEffect(() => {
        UpdatedataLoad(id);
      }, []);
// console.log(input,);


const dispatch=useDispatch();
const mydata= useSelector((state)=>state.cartProduct.cart)




    return (
       <>


<div className="container mx-auto mt-10">

            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <div className="zoom-image-container p-16">
                            <img className="h-[400px]" src={input.Imgurl} alt="Product" />
                        </div>
                    </div>
                    <div className="p-8">
                        <h1 className="">{input.Tag}</h1>

                        <div className="uppercase tracking-wide text-4xl text-blue-600  font-semibold">{input.Name}</div>
                        <h2 className="block mt-1 text-2xl leading-tight font-medium text-black hover:underline">{input.Category}</h2>
                        <p className="mt-2 text-gray-500 text-xl">{input.Detail}</p>
                        <div className="mt-2 text-2xl font-black">
                            <span className="text-gray-500 text-2xl">Price:</span> {input.Price}
                        </div>
                        <div className="">
                            <img className="h-20 cursor-pointer" src="\src\assets\Screenshot 2024-06-07 225614.png" />
                        </div>

                        

                        <div className="mt-4">
                            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600"
                         onClick={
                          ()=>{dispatch(addtocart({
                              id:input._id,
                              Detail:input.Detail,
                              Imgurl:input.Imgurl,
                              Name:input.Name,
                              Price:input.Price ,
                              qnty:1,
                              }))}} 
                             >Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


{/* <Shop /> */}
    </>
    
    );
}

export default ProductDetail;

