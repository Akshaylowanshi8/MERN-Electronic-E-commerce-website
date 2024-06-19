import React, { useState ,useEffect} from 'react';
import {addtocart} from "./ProductSlice"
// import { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
const Home=()=> {

  let mynav=useNavigate();
  const updhand=(id)=>{
      mynav("../ProductDetail/"+id)
      
      }

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:8000/login/sucess", { withCredentials: true });

        console.log("response",response)
    } catch (error) {
  console.log(error);
    }
}


useEffect(() => {
  getUser()
}, [])


  const dispatch=useDispatch();
  const mydata= useSelector((state)=>state.cartProduct.cart)

  

const [featureProduct,setfeatureProduct]=useState([])
const [BestsellProduct,setBestsellProduct]=useState([])
const [RecommendedProduct,setRecommendedProduct]=useState([])
const [hotnewProduct,sethotnewProduct]=useState([])


const LoadhotnewProduct=()=>{
  axios
    .get("http://localhost:8000/Displayproduct/LoadhotnewProduct")
    .then(res =>sethotnewProduct(res.data))
    }
const LoadfeatureProduct=()=>{
  axios
    .get("http://localhost:8000/Displayproduct/LoadfeatureProduct")
    .then(res =>setfeatureProduct(res.data))
    }
    const LoadBestsellProduct=()=>{
      axios
        .get("http://localhost:8000/Displayproduct/LoadBestsellProduct")
        .then(res =>setBestsellProduct(res.data))
        }
const LoadRecommendedProduct=()=>{
        axios
            .get("http://localhost:8000/Displayproduct/LoadRecommendedProduct")
            .then(res =>setRecommendedProduct(res.data))
            }
    useEffect(() => {
    LoadfeatureProduct();
    LoadBestsellProduct();
    LoadRecommendedProduct();
    LoadhotnewProduct();
    }, []);

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    let hotnewPro = hotnewProduct.map((key)=>{
      return(<>
     
     <div class="bg-white rounded-lg  hover:shadow-2xl shadow-black  p-8 scale-[0.85]">
                <div class="relative overflow-hidden" onDoubleClick={()=>{updhand(key._id)}}>
                    <img class="object-cover w-full bg-white h-full" src={key.Imgurl} alt="Product" />
                    <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">{key.Name}</h3>
                <p class="text-gray-500 text-sm mt-2">{key.Detail}</p>
                <div class="flex items-center justify-between mt-4 ">
                    <span class="text-gray-900 font-bold text-lg">₹{key.Price} </span>
                    <button class="bg-violet-600 text-white py-2 px-4 rounded-sm font-bold hover:bg-violet-950"
                    
                    onClick={
                ()=>{dispatch(addtocart({
                    id:key._id,
                    Detail:key.Detail,
                    Imgurl:key.Imgurl,
                    Name:key.Name,
                    Price:key.Price ,
                    qnty:1,
                    }))}}
                    >Add to Cart</button>
                </div>
            </div>

      
      </>)})
    let RecommendedPro = RecommendedProduct.map((key)=>{
      
    return(
    <>
<div class="bg-white rounded-lg  hover:shadow-2xl shadow-black  p-8 scale-[0.85]">
                <div class="relative overflow-hidden" onDoubleClick={()=>{updhand(key._id)}}>
                    <img class="object-cover w-full bg-white h-full" src={key.Imgurl} alt="Product" />
                    <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">{key.Name}</h3>
                <p class="text-gray-500 text-sm mt-2">{key.Detail}</p>
                <div class="flex items-center justify-between mt-4 ">
                    <span class="text-gray-900 font-bold text-lg">₹{key.Price} </span>
                    <button class="bg-violet-600 text-white py-2 px-4 rounded-sm font-bold hover:bg-violet-950"
                    
                    onClick={
                ()=>{dispatch(addtocart({
                    id:key._id,
                    Detail:key.Detail,
                    Imgurl:key.Imgurl,
                    Name:key.Name,
                    Price:key.Price ,
                    qnty:1,
                    }))}}
                    >Add to Cart</button>
                </div>
            </div>

   
      </>)})
let BestsellPro = BestsellProduct.map((key)=>{
      return(<>
<div class="bg-white rounded-lg  hover:shadow-2xl shadow-black  p-8 scale-[0.85]   ">
                <div class="relative overflow-hidden" onDoubleClick={()=>{updhand(key._id)}}  >
                    <img class="object-cover w-full bg-white h-full" src={key.Imgurl} alt="Product" />
                    <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">{key.Name}</h3>
                <p class="text-gray-500 text-sm mt-2">{key.Detail}</p>
                <div class="flex items-center justify-between mt-4 ">
                    <span class="text-gray-900 font-bold text-lg">{key.Price} </span>
                    <button class="bg-violet-600 text-white py-2 px-4 rounded-sm font-bold hover:bg-violet-950"
                    
                    onClick={
                ()=>{dispatch(addtocart({
                    id:key._id,
                    Detail:key.Detail,
                    Imgurl:key.Imgurl,
                    Name:key.Name,
                    Price:key.Price ,
                    qnty:1,
                    }))}}
                    >Add to Cart</button>
                </div>
            </div>

 
      </>)})
let featurePro = featureProduct.map((key)=>{
  return(
  <>


<div class="bg-white rounded-lg  hover:shadow-2xl shadow-black  p-8 scale-[0.85]">
                <div class="relative overflow-hidden" onDoubleClick={()=>{updhand(key._id)}}>
                    <img class="object-cover w-full bg-white h-full" src={key.Imgurl} alt="Product" />
                    <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">{key.Name}</h3>
                <p class="text-gray-500 text-sm mt-2">{key.Detail}</p>
                <div class="flex items-center justify-between mt-4 ">
                    <span class="text-gray-900 font-bold text-lg">₹{key.Price} </span>
                    <button class="bg-violet-600 text-white py-2 px-4 rounded-sm font-bold hover:bg-violet-950"
                    
                    onClick={
                ()=>{dispatch(addtocart({
                    id:key._id,
                    Detail:key.Detail,
                    Imgurl:key.Imgurl,
                    Name:key.Name,
                    Price:key.Price ,
                    qnty:1,
                    }))}}
                    >Add to Cart</button>
                </div>
            </div>

  </>
  
  )})


return(<>



<Swiper
      spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay:2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-4">
<SwiperSlide> <div className="crtext1 scale-90">
              Up To 50% Discount <br /><span className="">  Microsoft Surface <br /> Book Laptop</span><button>Shop Now</button>
                </div>
              <img alt='coming' src='\src\assets\sample-1.jpg' width="100%" /></SwiperSlide>
<SwiperSlide><div className="crtext1 scale-90">
                Up To 79% Discount <br /><span className="">SONY DualSense Edge <br />Gamepad</span><button>Shop Now</button>
              </div>
              <img alt='coming' src='\src\assets\sample-2.jpg' width="100%" /></SwiperSlide>

              {/* <SwiperSlide><img className="h-[450px] w-full" src="\src\assets\bbg.webp" /></SwiperSlide> */}
      </Swiper>

{/* --------------------products------------------- */}

<div class=" bg-purple-500 py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold  text-purple-50 mb-8">Introducing Featured Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {featurePro}
        </div>

    </div>
</div>

<img className="" src="\src\assets\Split-OnePlus-CE3-CE-2-banner-30-April-D.avif" />




<div class=" bg-emerald-900  py-16"  >
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold  text-purple-50 mb-8">Recommended for you</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {RecommendedPro}
        </div>

    </div>
</div>


{/*------------------------------- slider effect carts ----------------------------------------------------- */}

<img className="" src="\src\assets\had-1.webp" />

<div class=" bg-gray-800 py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold  text-indigo-50 mb-8">Best seller Products </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        { BestsellPro }  
        </div>

    </div>
</div>

<div class=" bg-green-900 py-16">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold  text-white mb-8">Not New Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        
       {hotnewPro}
        </div>

    </div>
</div>

</>)}
export default Home;