import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slices/wishlist';
import { addToCart } from '../redux/slices/cartSlice';

function Home() {

  const data=useFetch('https://dummyjson.com/products')
  console.log(data);
  //to call a function that add value to state
  const dispatch=useDispatch()
  return (

   <>
   <div className='image'>
   <img src="https://img.freepik.com/premium-photo/happy-asian-woman-with-colorful-shopping-bags-cardboard-boxes-home_44943-1243.jpg" alt=""  width={"100%"} />

   </div>
    <Row className='m-5' style={{paddingTop:'100px'}}>
    
    { data?.length>0?
    data.map((item)=>( <Col className='mb-5 ' sm={12} md={6} lg={4} xl={3} >
    <Card style={{ width: '100%' }}>
    <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}}/>
    <Card.Body>
      <Card.Title>{item.title.slice(0,20)}...</Card.Title>
      <Card.Text>
      <p>  {item.description.slice(0,40)}... </p>
      <p className='fw-bolder'>Price:₹{item.price}</p>
      </Card.Text>
    <div className='d-flex align-item-center justify-content-between'>
    <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger rounded"><i class="fa-solid fa-heart" style={{color:'red'}}/></Button>
      <Button onClick={()=>dispatch(addToCart(item))} variant="outline-success rounded"><i class="fa-solid fa-fa-solid fa-cart-shopping " style={{color:'green'}}/></Button>

    </div>
    </Card.Body>
  </Card>
    </Col>))
    :<p>nothing to display</p>
    }
   </Row>
   </>
  )
}

export default Home
