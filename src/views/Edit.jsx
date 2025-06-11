import React, { useEffect, useState } from "react";
import axios from "axios";
import toast,{Toaster} from "react-hot-toast";
import { useParams } from "react-router";

function Edit(){

    const [student, setStudents] = useState({
        id: "",
        name: "",
        city: "",

    });

    const {userId} =useParams();

    const editStudent= async() =>{
        try{
      const response = await axios.put(`https://first-server-1-vk1z.onrender.com/students/${userId}`,
        {
        
        name: student.name,
        city: student.city
      }
    );

    if(response.data.success){
        
        toast.success(response.data.message);
    }
    else{
        toast.error(response.data.message);
    }
}catch(e){
    toast.error(e.response.data.message);
}
    };


    
 const loadStudent = async ()=>{

try{
    const response = await axios.get(`https://first-server-1-vk1z.onrender.com/students/${userId}`);
    setStudents(response.data.data);
}
catch(e){
    toast.error(e.response.data.message);
}
 };

 useEffect(()=>{

    if(userId){
    loadStudent();
    }
 },[userId]);






    return(
    <div>
    <h1 className="text-center text-5xl my-4"> Edit Students({userId})</h1>
    <div className="w-1/2 mx-auto shadow-md m-5 p-5 rounded-md border-2 border-gray-200 bg-white">
        <input
         type="text"
          placeholder="Enter ID"
          value={student.id}
          onChange={(e) => setStudents({...student, id: e.target.value})}
           className="block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
           disabled
           />


        <input 
        type="text" 
        placeholder="Enter Name" 
        value={student.name}
        onChange={(e) => setStudents({...student, name: e.target.value})}
        className="block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
        />

        <input
         type="text"
          placeholder="Enter City" 
          value={student.city}
          onChange={(e) => setStudents({...student, city: e.target.value})}
          className="block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
          />

          <button className="bg-blue-500 text-xl px-10 rounded-full text-white block mx-auto mt-1-
           mb-2 cursor-pointer"
           onClick={editStudent}
           >Edit Students
           </button>
    </div>
    <Toaster />
    </div>

    );
}

export default Edit;