import React from 'react'
import { ListGroup} from 'reactstrap'
import { Link } from 'react-router-dom'

const Menus = () => {
  return (
    <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Course List</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/instances" action>Instance List</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="/add-instance" action>Add Instance</Link>
    </ListGroup>
  )
}

export default Menus
