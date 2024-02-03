import axios from "axios";
import React from "react";
import base_url from "./../api/bootapi"

import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container
} from "reactstrap";
import { toast } from "react-toastify";



const Course = ({course,update}) => {
    const deleteCourse =(id)=>{
        axios.delete(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Course Deleted")
                // update(id);
            },
            (error)=> {
                toast.error("update Not worked")
            }
        )
    }

    const updateCourse =(id)=>{
        axios.put(`${base_url}/courses/${id}`).then(
            (response)=>{
                toast.success("Update pop need to add" + id)
                update(id);
            },
            (error)=> {
                toast.error("Update pop need to add error"+id)
            }
        )
    }
    return(
        <Card>
            <CardBody className="text-center">
                <CardSubtitle className="text-center" tag="h5">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                    <Container className="text-center">
                        <Button color="danger" 
                        onClick={()=>{
                            deleteCourse(course.id);
                        }}
                        >Delete</Button>{'   '}
                        <Button color="warning"
                        onClick={()=>{
                            updateCourse(course.id);
                        }}
                        >Update</Button>
                    </Container>
            </CardBody>
        </Card>
    )

}

export default Course;