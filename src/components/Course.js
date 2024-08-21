import React from "react";


function Course({course, onDelete}) {
  return (
    
        <tr>
          <td> {course.title} </td>
          <td> {course.description} </td>
          <td> {course.courseCode} </td>
          <td><a onClick={()=> onDelete(course.id)} style={{ cursor: 'pointer' }} className="text-danger"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></a></td>
        </tr>
      
    
  );
}

export default Course;
