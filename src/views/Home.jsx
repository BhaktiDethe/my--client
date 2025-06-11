import React, {useState} from "react";

import StudentCard from "./../components/StudentCard";
import axios from "axios";
import AddUserIcon from "./../assets/add-user-icon.png";
import { Link } from "react-router";

function Home(){
const [students, setStudents] = useState([]);


const loadStudents = async() =>{

const response =await axios.get("https://first-server-1-vk1z.onrender.com/students");
setStudents(response.data.data);





};

useState (()=>{
    loadStudents();
},[]);

return(
<div>
 <h1 className="text-center text-6xl my-4">All Students</h1>

<div>
    {students.map((studObj, i)=>{
    const { id, name, city} = studObj;

    return(
        <StudentCard key={i} id={id} name={name} city={city} loadStudents={loadStudents}/>
    )
        
})}
</div>

<Link to="/add">

<img src={AddUserIcon}
 alt="Add User" 
 className="h-[50px] fixed bottom-5 right-5 cursor-pointer" />
 </Link>
    </div>
);

}
export default Home;