import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
toast.warn('already exists in your cart !', {
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
const notify1 = () => {
    toast.warn('atlist one product buy !', {
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
const initialState={

    
cart:[]
}
const ProductSlice=createSlice({

name:"cartProduct",
initialState:initialState,

reducers:{
addtocart:(state,action)=>{ 
    var myitem=state.cart.filter((key)=>key.id===action.payload.id);
    if(myitem.length>=1)
    {
        notify()
        // alert ("product alradey add") 
    }
else{
        state.cart.push(action.payload)
}}
,CartRemove:(state ,action)=>
        {state.cart=state.cart.filter(item=>item.id!==action.payload) 
     
            
        },
    proQtyInc:(state,action)=>{
            for(var i=0;i<state.cart.length;i++)
            {
                if (state.cart[i].id===action.payload)
                {
                    state.cart[i].qnty++;
                }
            }
        
        },
        proQtyDec:(state,action)=>
        {
            for(var i=0;i<state.cart.length;i++)
            {
                if (state.cart[i].id===action.payload)
                {
                    if(state.cart[i].qnty>1)
                     {state.cart[i].qnty--;
                    }
                     else
                     {
                     notify1()
                        // alert("atlist one product buy")
                     }
                       
                    }
            }
}
,
Cartimpt:(state )=>
    {state.cart=state.cart=[]; 
    },

}})

export const { addtocart,CartRemove, proQtyInc,proQtyDec,Cartimpt} =ProductSlice.actions
export default ProductSlice.reducer;
