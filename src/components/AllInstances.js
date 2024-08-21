import React from 'react'
import { useState,useEffect } from 'react'
import Instance from './Instance'
import { Card,CardBody, CardHeader, Table } from 'reactstrap';
import axios from 'axios';
import base_url from '../api/bootapi';
import { toast } from 'react-toastify';

const AllInstances = () => {

    const[instance,setInstance] = useState([])

    // function to call all instances from server
    const getAllInstancesFromServer = ()=>{
        axios.get(`${base_url}/instances`).then(
            (response)=>{
                setInstance(response.data)
               
            },
            (error)=>{
                console.log(error) 
            }
        )
    }

    useEffect(()=>{
        getAllInstancesFromServer() ;
    },[])

    useEffect(()=>{
        document.title="Instance Lists"
    },[])


    const handleDelete = (id) => {
        axios.delete(`${base_url}/instance/${id}`).then(
            (response) => {
                
                setInstance(instance.filter(instance => instance.id !== id));
                toast.success("Course Instance Deleted Successfully");
            },
            (error) => {
                console.log(error);
                toast.error("Failed to delete instance");
            }
        );
    };

  return (
    <>
    <Card>
        <CardHeader> 
            <h3 className="text-center">Instances</h3>
        </CardHeader>
    <CardBody>
  
    <Table>
       
      <thead>
        <tr>
          <th>Title</th>
          <th>Year</th>
          <th>Semester</th>
          <th>Code</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
       {instance.length>0 ? instance.map((item) => <Instance key={item.id} instance={item} onDelete={handleDelete}  />): "No Instances"}
      </tbody>
    </Table>
    </CardBody>
    </Card>
    </>
  )
}

export default AllInstances
