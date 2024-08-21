import React from 'react'
import { Button,Form, FormGroup, Label, Input, Container, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';
const AddInstance = () => {
    const[courses,setCourses] = useState([]);
    const[instance,setInstance] = useState({}) ;
 
    // function to get all courses from server 
    const getAllCoursesFromServer = ()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                setCourses(response.data)
            },
            (error)=>{
                console.log(error)
            }
        )
    }

    useEffect(()=>{
        getAllCoursesFromServer() ;
    },[])
 

    useEffect(()=>{
        document.title = "Add Instance"
    },[])
 
    const handleForm = (e)=>{

        console.log(instance);

        postDataOnServer(instance)
        
        e.preventDefault() ;
    }


    const postDataOnServer = (data)=>{
        axios.post(`${base_url}/add-instance`,data).then(
            (response)=>{
                console.log(response)
                toast.success("Course Instance Added Successfully")
                
            },
            (error)=>{
                console.log(error)
               toast.error("Error! Something Went Wrong")
            }
        )
    }

  return (
    <>
    <Card>
        <CardHeader>
        <h3 className='text-center'>Add Instance of Course Delivery</h3>
        </CardHeader>

        <CardBody>
    <Form onSubmit={handleForm}>
    
    
    <FormGroup>
          <Input type="select"  onChange={(e)=>{setInstance({...instance,courseCode:e.target.value})}} name="select" id="exampleSelect">
            <option value="" disabled selected>Select Course</option>
            {courses.length>0 ? courses.map((item) => <option value={item.courseCode}>{item.title}</option>) : <option disabled>No Courses</option>}
          </Input>
        </FormGroup>

        <FormGroup>
          <Input onChange={(e)=>{setInstance({...instance,year:e.target.value})}} type="number" min="1900" max="2099" name="year" id="year" placeholder="Year" />
        </FormGroup>
        <FormGroup>
          <Input onChange={(e)=>{setInstance({...instance,semester:e.target.value})}} type="number" name="semester" id="semester" placeholder="Semester" />
        </FormGroup>
        
        <Container>
        <Button color="info" type='submit' >Add Instance</Button>
        <Button color="warning mx-2" type='reset'>Refresh</Button>
        </Container>
       
    </Form>
    </CardBody>

   
    </Card>
    </>
  )
}

export default AddInstance
