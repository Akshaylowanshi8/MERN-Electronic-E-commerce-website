import * as React from 'react'
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { PieChart } from '@mui/x-charts/PieChart';
import { Tooltip } from 'recharts';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';


const pieParams = { height: 200, margin: { right: 5 } };
// const palette = ['red', 'blue', 'green'];



const Summary=()=>{


  const [AllProduct,setAllProduct]=useState([])

  //---------------- display: data---------------
  const LoadAllProduct=()=>{
    axios
          .get("http://localhost:8000/Displayproduct/LoadAllProduct")
          .then(res =>setAllProduct(res.data)    
                  )
       
        }
         useEffect(() => {
            LoadAllProduct()       
          }, []);
  

          // console.log(AllProduct);


          //------------------ pai chart data---------------

const filteredProducts = AllProduct.filter(AllProduct=> AllProduct.Category === "Mobile");
 let  Mobiles=(filteredProducts.length*100/AllProduct.length);
 const filteredProduct = AllProduct.filter(AllProduct=> AllProduct.Category === "Laptop");
 let  Laptop=(filteredProduct.length*100/AllProduct.length);
 const filtered = AllProduct.filter(AllProduct=> AllProduct.Category === "Mobile accessories");
 let  MobilesA=(filtered.length*100/AllProduct.length);
 const filterede = AllProduct.filter(AllProduct=> AllProduct.Category === "smart watch");
 let  SmartWatchs=(filterede.length*100/AllProduct.length);
 


// console.log("lp", Laptop);
// console.log("sw", SmartWatchs);
// console.log("ma", MobilesA);

 const [Data ,setDate]=useState([])
 let LoadData=async()=>{
  let  url="http://localhost:8000/Admin/DisplayOrder"

 await axios
    .get(url)
    .then(res =>setDate(res.data))
    .catch(err => console.error(err));      
    }
    useEffect(() => {
    LoadData();
    }, []);

const [summaryData, setSummaryData] = useState([]);
const [progress, setProgress] = React.useState();

const [userData ,setuserData]=useState([])

const  Loaduserdata=async()=>{
   await axios.get('http://localhost:8000/Admin/DisplayOrder')
    .then(response => {
        setSummaryData(response.data);
        setProgress(response.data.length)
    })
    .catch(error => {
        console.error('Error fetching summary data:', error);
    });
 
    await axios.get('http://localhost:8000/Admin/userdata')
    .then(response => {
        setuserData(response.data);
   

    })
    .catch(error => {
        console.error('Error fetching summary data:', error);
    });
}
useEffect(() => {
   Loaduserdata()
}, []);  




let Noofuser=0;
let ans=userData.map(()=>{

Noofuser=userData.length;
})



// console.log(summaryData);
 let volume=0;
 let  Noofpayments=summaryData.length;
 
  let anss = summaryData.map((key)=>{
       volume +=key.amount
   })


   const settings = {
    width: 200,
    height: 200,
    value: progress,
  };
  
  const settingss = {
    width: 200,
    height: 200,
    value: Noofuser,
  };
  
    return(<>


<div className="container mx-auto">
            <h1 className="text-3xl font-bold my-8">Summary Page</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold">No of Payments</h2>

                    <div className="flex">
                    <img className="h-60" src="\src\assets\ingg.webp" />


                    <Gauge
      {...settings}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />

                    </div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold">Product sharing </h2>
                    <div className="flex mt-4  text-3xl">
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
  <Box flexGrow={2}>
    <Typography></Typography>
    <PieChart
      series={[{ data: [{ value: Laptop, name: 'Laptop' },   { value: Mobiles, name: 'Mobiles' }, { value: MobilesA, name: 'MobilesA' }, { value: SmartWatchs, name: 'SmartWatchs' }] }]}
      {...pieParams}>
      {/* Add Tooltip component to PieChart */}
      <Tooltip />
    </PieChart>
  </Box>
</Stack>
<div className="">
<ol class="list-disc">
  <li className='text-blue-500'>Mobile</li>
  <li  className='text-fuchsia-500' >Mobile accessories</li>
  <li  className='text-teal-500'>Laptop</li>
  <li  className='text-purple-800'>Smart watch</li>
</ol>
</div> 
   </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold">Payment Volume</h2>
                    <div className=" flex mt-4 text-3xl">
                    <img className="h-60" src="\src\assets\payment.jpg" />
             <h1 className="p-24 font-black">   {volume} </h1>  
                    </div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-3xl font-bold">Total No castumer</h2>
                    <div className="flex mt-4  text-3xl">
                    <img className="h-60" src="\src\assets\cast.avif" />
                    <Gauge
      {...settingss}
      cornerRadius="50%"
      sx={(theme) => ({
        [`& .${gaugeClasses.valueText}`]: {
          fontSize: 40,
        },
        [`& .${gaugeClasses.valueArc}`]: {
          fill: '#52b202',
        },
        [`& .${gaugeClasses.referenceArc}`]: {
          fill: theme.palette.text.disabled,
        },
      })}
    />

                
                    </div>
                </div>
   
               
            </div>
        </div>
    </>)
}
export default Summary;





