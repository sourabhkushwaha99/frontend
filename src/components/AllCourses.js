import React from "react";
import { Card,CardBody, CardHeader, Table } from 'reactstrap';
import { useState, useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

function AllCourses() {

    const[courses,setCourses] = useState([])
    
    // function to call server 
    const getAllCoursesFromServer = ()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                setCourses(response.data) 
            },
            (error)=>{
                console.log(error) ;
                toast.error("Something went wrong!");
            }
        )
    }

    useEffect(()=>{
        getAllCoursesFromServer() ;
    },[])

    useEffect(()=>{
        document.title="Course Lists" ;
    },[])

    const handleDelete = (id)=>{
      axios.delete(`${base_url}/course/${id}`).then(
        (response)=>{
          setCourses(courses.filter(item => item.id!=id))
          toast.success("Course Deleted Successfully")
        },
        (error)=>{
          toast.error("Error! Something Went Wrong")
        }
      )
    }

  return (
    <>
    <Card>
        <CardHeader> 
            <h3 className="text-center">Courses</h3>
        </CardHeader>
    <CardBody>
  
    <Table>
       
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Course Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {courses.length>0 ? courses.map((item) => <Course key={item.id} course={item} onDelete={handleDelete} />): "No Course"}
      </tbody>
    </Table>
    </CardBody>
    </Card>
    </>
  );
}

export default AllCourses;
