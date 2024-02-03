import React,{useEffect, useState} from "react";
import Course from "./Course";
import base_url from"../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";


const Allcourses= () => {

    useEffect(()=>{
        document.title = "All courses || By Omkrushana"
    },[]);

// function to call server

    const getAllCoursesFromServer=()=> {
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //sucess
            console.log(response.data);
            // toast.success("Courses has been loaded");
            setCourses(response.data);
            },
            (error) => {
                //for error
                console.log(error);
                toast.error("Server is down");
            }
            
        );
    };
    //calling loading course function
    useEffect (() => {
        getAllCoursesFromServer();
    },[])

    const[courses,setCourses] = useState([ ]);

    const updateCourses=(id)=>{
        setCourses(courses.filter((c) => c.id !=id));
    }

    return(
        <div>
            <h2>All courses</h2>
            <p>Following are the available course</p>
            {
                courses.length>0 ? courses.map((item) => <Course key={item.id} course= {item} update = {updateCourses}
                />):"No courses"
            }
        </div>
        
    )
}

export default Allcourses;

