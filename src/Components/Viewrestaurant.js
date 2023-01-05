import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import Restoperation from './Restoperation';
import Restreview from './Restreview';

function Viewrestaurant() {
    const params=useParams()
    console.log(params.id);
    //to hold values

  const[allRestaurants,setRestaurants]=useState([])

  //function to csll AOI to  get all restaurent items from Restaurent.jason

  const getRestaurants=async()=>{
    await fetch('/restaurants.json')
    .then((data)=>{
      data.json()
      .then((result)=>{
        setRestaurants(result.restaurants); //convert array of object of array
        //console.log(result);
      })
      //console.log(data);
    })
  }
  //console.log(allRestaurants);
  useEffect(()=>{
    getRestaurants()
  },[])

  console.log(allRestaurants);

  const viewrest=allRestaurants.find(item=>item.id==params.id)
  console.log(viewrest);
  return (
    <>
        {
            viewrest?
            (
                <Row>
                    <Col>
                    <Image src={viewrest.photograph} fluid />
                    </Col>
                    <Col>
                    <p> ID - {viewrest.id}</p>
                    <h1 className='text-white'> {viewrest.name}</h1>
                    <h3 className='text-danger'> {viewrest.neighborhood}</h3>
                    <h4>Address:-{viewrest.address}</h4>
                    <h5>Cuisine :- {viewrest.cuisine_type}</h5>
                    <Restoperation operate={viewrest.operating_hours}/>
                    <br></br>
                    <br></br>
                    <Restreview reviews={viewrest.reviews}/>
                    </Col>
                </Row>

            ):'null'
        }

    </>
  )
}

export default Viewrestaurant