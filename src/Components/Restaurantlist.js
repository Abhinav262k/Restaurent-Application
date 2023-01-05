import { useEffect, useState } from 'react'
import React from 'react'
import Restaurantcards from './Restaurantcards'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { RestaurantlistAction } from '../Action/restaurantlistAction';
import { useDispatch, useSelector } from 'react-redux';

function Restaurantlist() {
//to hold values

  const[allRestaurants,setRestaurants]=useState([])

  //function to csll AOI to  get all restaurent items from Restaurent.jason

  // const getRestaurants=async()=>{
  //   await fetch('/restaurants.json')
  //   .then((data)=>{
  //     data.json()
  //     .then((result)=>{
  //       setRestaurants(result.restaurants); //convert array of object of array
  //       //console.log(result);
      //})
      //console.log(data);
    //})
  //}
  //console.log(allRestaurants);

  const dispatch =useDispatch();
  const result=useSelector(state=>state.restaurantReducer) 
  console.log(result);
  const{restaurantList}=result

  useEffect(()=>{
    //getRestaurants()
    dispatch(RestaurantlistAction());
      },[])


return (
    <Row>
      <h1 className='text-grey'>Restaurant List</h1>
      {
        restaurantList.map(item=>(
          <Col sm={12} md={8} lg={4} xl={3}>
          <Restaurantcards restaurant={item}/>
          </Col>
          
          // <h4 className='text-bg-dark'>{item.name}</h4>
        ))
      }
    </Row>
  )
}

export default Restaurantlist