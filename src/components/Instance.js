import axios from 'axios'
import React, { useEffect, useState } from 'react'
import base_url from '../api/bootapi'


const Instance = ({instance,onDelete }) => {

    const[course,setCourse] = useState({})

    // function to get the course by id 
    const getCourseById = ()=>{
        axios.get(`${base_url}/course/${instance.courseCode}`).then(
            (response)=>{
                 setCourse(response.data) 
                console.log(response.data)
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        getCourseById() ;
    },[])

 

  return (
    <tr>
    <td> {course.title} </td>
    <td>{instance.year}</td>
    <td>{instance.semester}</td>
    <td> {instance.courseCode} </td>
    <td><a onClick={() => onDelete(instance.id)} style={{ cursor: 'pointer' }} className="text-danger"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></a></td>
  </tr>
  )
}

export default Instance
