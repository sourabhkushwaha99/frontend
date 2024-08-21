import React, { useState } from 'react'
import { Button,Form, FormGroup, Label, Input, Container, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { useEffect } from 'react';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';


const AddCourse = () => {

    useEffect(()=>{
        document.title="Add Course"
    },[])

    const[course,setCourse] = useState({});

    // function to handle form 
    const handleForm = (e)=>{

        console.log(course);

        postDataOnServer(course)
        
        e.preventDefault() ;
    }

    // creating function to post data on server 
    const postDataOnServer = (data)=>{
        axios.post(`${base_url}/add-course`,data).then(
            (response)=>{
                console.log(response)
                toast.success("Course Added Successfully")
               
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
        <h3 className='text-center'>Add Course Details</h3>
        </CardHeader>

        <CardBody>
    <Form onSubmit={handleForm}>
    <FormGroup>
          
          <Input onChange={(e)=>{ setCourse({...course, title:e.target.value })}} type="text" name="title" id="coursetitle" placeholder="Course Title" />
     </FormGroup>

     <FormGroup>
           
          <Input onChange={(e)=>{setCourse({...course, courseCode:e.target.value})}} type="text" name="courseCode" id="courseCode" placeholder="Course Code" />
     </FormGroup>

     <FormGroup>
         
          <Input  onChange={(e)=>{setCourse({...course, description:e.target.value})}} type="textarea" name="description" id="coursedescription" placeholder="Course Description" />
        </FormGroup>
        
        <Container>
        <Button type="submit" color="info" >Add Course</Button>
        <Button color="warning mx-2" type='reset' >Refresh</Button>
        </Container>
    </Form>
    </CardBody>

  
    </Card>
    </>
  )
}

export default AddCourse




