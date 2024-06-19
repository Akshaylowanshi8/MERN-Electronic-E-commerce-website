import { Link, Outlet,useNavigate } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
import Footer from "./Footer";
import ScrollToTop from "react-scroll-to-top";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { IoIosLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Layout=()=>{
  let mynav=useNavigate();

let username= window.localStorage.getItem("username")
    // const dispatch=useDispatch();
    // gatting data from cart or slice
const mydata= useSelector((state)=>state.cartProduct.cart)
console.log(mydata);


useEffect(() => {
window.scrollTo(0, 0)
}, [])


const userlogout=()=>{


window.localStorage.clear();

toast.info('you are successfully logout!', {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  // transition: Bounce,
  })

// alert("")
document.getElementById("iii").style.display="none"
mynav("/home")

}
let profile=0;
const  prohandle=(e)=>{
 profile=profile+e;

if(profile===1)
  {
    document.getElementById("iii").style.display="block";

  }

 else  if( profile===2 )
    {
    document.getElementById("iii").style.display="none"
    profile=0;
    }

}
return(
    <>
<div className=" flex justify-around h-12 bg-[rgb(18,156,184)] align-middle">
      <div className="align-middle p-3">Tell a friends about Electshop Electronics & get 30% off your next order.</div>
   <div className="">
    <ul className="flex gap-9 p-3">
        <li className=""> Need Help?</li>
        <li className=""> Gift Cards</li>
        <li className="">
          <select className="text-black" >
            <option value="A">English</option>
            <option value="B">Hindi</option>
          </select>
        </li>
    </ul>
   </div>
</div>
<div className=" flex justify-around  sticky top-0 text-3xl shadow-xl pt-2 z-10 bg-white">
<div className=""><img alt="coming" src="\src\assets\logo-1658212097.jpg" /></div>
    {/* ============== */}
    {/* <div className="flex justify-center shadow-md sticky top-[70px] z-10 bg-white"> */}
<ul className=" flex  gap-6 p-3 text-2xl ">
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="home"> Home</Link></li> 
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="shop">Shop</Link></li> 
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="ShopbyCatagry">Shop by Category</Link></li> 
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="Search">Search</Link></li> 
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="about">About us</Link></li> 
   <li className=" hover:text-pink-400  hover:text-xl"><Link to="Contect">Contact us</Link></li> 
   {/* <li className=""><Link to="allbrands">All Brands</Link></li>  */}
   </ul>
    {/* </div> */}

   <div className="">
    <ul className="flex gap-9 p-3">

        <li className=""><p className="flex h-2 w-2 absolute items-center justify-center rounded-full  bg-[rgb(18,156,184)] p-3 ml-6 font-black text-xs text-white">{mydata.length}</p> <Link to="cart"><FaCartPlus /> </Link> </li>
        <li className=""> <Link to="AdminLogin"> <RiAdminFill title="adminuser" /></Link></li>
     
      {!username?<><li className="cursor-pointer "><Link to="UserLogin"> <FaRegUser  title="user"/></Link></li> </>:<><li></li> <li onClick={()=>prohandle(1)} className="cursor-pointer"  >{username}</li> </> }
    </ul>
    </div>

<div className="absolute  right-3 top-16 " style={{display:"none"}} id="iii">

<div class="flex items-center rounded-sm  bg-slate-500 justify-center  ">
  <div class="w-64 rounded-lg border-2 border-indigo-500 bg-transparent p-4 text-center shadow-lg dark:bg-gray-800">
    <figure class="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-500 dark:bg-indigo-600">
      
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-person-fill text-white dark:text-indigo-300" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path>
      </svg>
      <figcaption class="sr-only">John Doe, Web Developer</figcaption>
    </figure>
    <h2 class="mt-4 text-2xl font-bold text-r ">{username}</h2>
    <p class="mb-4 text-gray-600 dark:text-gray-300"><button className="" onClick={userlogout}> <IoIosLogOut className="font-bold text-3xl text-red-700"  title="Logout"/></button></p>
   
  </div>
</div>


</div>

</div>

    <Outlet /> 
    <Footer />
    <div style={{ marginTop: "1px" }} >
      <ScrollToTop smooth  style={{ marginTop: "100vh", textAlign:"center",justifyContent:"center", background:"#aaaaaa", padding:"3px"}} />
    </div>

    <ToastContainer
position="top-center"
autoClose={5000}
limit={3}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
// transition: Bounce,
/>
    </>
)
}

export default Layout;