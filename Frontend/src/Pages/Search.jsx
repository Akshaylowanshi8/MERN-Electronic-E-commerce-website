import { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import {addtocart} from "./ProductSlice"
import { useSelector,useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Search=()=>{

        useEffect(() => {
          window.scrollTo(0, 0)
        }, [])

    const [product ,SetProduct]=useState([]);
    const [get,Setget]=useState("")
 const handleChange=(e)=>{
    // e.preventDefault();
   let names=e.target.name;
   let value =e.target.value;
   Setget(values=>({...values,[names]:value}));
   console.log(get);
    }  
    const dispatch=useDispatch();

    let aly=()=>{
    // alert('Data not found')
    toast.error('Data not found !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        // transition: Bounce,
        });
    }
 let handsub=()=>{
let url="http://localhost:8000/Displayproduct/Search";
axios.post(url,get).then((res)=>{
 if (res.data.length === 0) {
  aly()

    // alert('Data not found');
    } else {
     SetProduct(res.data); 
    }
Setget(" ")
})}
console.log(product);
let ans = product.map((key)=>{
        return(<>
<div class="bg-white rounded-lg shadow-md  hover:shadow-2xl shadow-black  p-8 scale-[0.85]">
                          <div class="relative overflow-hidden  ">
                              <img class="object-cover w-full bg-white h-full" src={key.Imgurl} alt="Product" />
                              <div class="absolute inset-1 hover:shadow-gray-900 shadow-sm opacity-40"></div>
                          </div>
                          <h3 class="text-xl font-bold text-gray-900 mt-4">{key.Name}</h3>
                          <p class="text-gray-500 text-sm mt-2">{key.Detail}</p>
                          <div class="flex items-center justify-between mt-10 ">
                              <span class="text-gray-900 font-bold text-lg">₹{key.Price} </span>
                              <button class="bg-violet-600 text-white py-3  px-5 rounded-sm font-bold hover:bg-violet-950"
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
      
       </>)
        })

    return(<>


<div className="ml-[500px] justify-center  mt-4 min-h-96">
Search data by Name <input required className="p-4  border-b bottom-1 rounded-l-md border border-gray-300" type="text" placeholder="Search" name="search"  value={get.search} onChange={handleChange}/>
    <button className="bg-slate-600 p-5 border-l-2 rounded-r-md absolute" type="submit" onClick={handsub}>
    <FaSearch />
    </button>

    <h1 className="text-red-500 text-2xl p-5" id="alart" > </h1>

<div className="grid justify-center  md:grid-cols-3  ">
 {ans} 
</div></div>
    </>)
}

export default Search;