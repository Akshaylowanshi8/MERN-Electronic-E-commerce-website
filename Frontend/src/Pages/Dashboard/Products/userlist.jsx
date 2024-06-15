import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import { RiCalendarCheckLine } from "react-icons/ri";

const Userlist = () => {
    const [data , setData] = useState([]);


    const [clickedIds, setClickedIds] = useState([]);

    const changestatus = (id) => {
        // Perform your status change logic here
        console.log("Changing status for ID:", id);

        // Update the clickedIds state to mark this ID as clicked
        setClickedIds([...clickedIds, id]);
    };


    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/Admin/userdata");
            setData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {   
        fetchData();
    }, []);
    const modifiedData = data.map((item, index) => ({
        ...item,
        id: item._id || index   
      }));
    const columns = [
        // { field: '_id', headerName: 'ID', width: 70 },
        { field: 'username', headerName: 'Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 130 },
        { field: 'mobileNo', headerName: 'Mobile Numbers', width: 150 }
    
    ];
return (
        <div style={{ height: 500, width:'100%'}} >
            <DataGrid
              rows={modifiedData}
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
};

export default Userlist;
