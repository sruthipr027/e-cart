import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromWishlist } from '../redux/slices/wishlist';
import { addToCart } from '../redux/slices/cartSlice';


function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch=useDispatch()

  const handleWishlist=(item)=>{
dispatch(addToCart(item))
dispatch(removeFromWishlist(item.id))

  }
  return (
    <div>
      <Row className='m-5'>
    
   { 
   wishlistArray?.length>0?
   wishlistArray?.map((item)=>(<Col  style={{paddingTop:'100px'}} className='mb-5 ' sm={12} md={6} lg={4} xl={3} >
   <Card style={{ width: '100%' }}>
   <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}}/>
   <Card.Body>
     <Card.Title>{item.title.slice(0,20)}...</Card.Title>
     <Card.Text>
     <p>  {item.description.slice(0,40)}... </p>
      <p className='fw-bolder'>Price:₹{item.price}</p>
     </Card.Text>
   <div className='d-flex align-item-center justify-content-between'>
   <Button  onClick={()=>dispatch(removeFromWishlist(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash" style={{color:'red'}}/></Button>
     <Button onClick={()=>handleWishlist(item)} variant="outline-success rounded"><i class="fa-solid fa-fa-solid fa-cart-shopping " style={{color:'green'}}/></Button>

   </div>
   </Card.Body>
 </Card>
   </Col>))
   :
   <div style={{height:'100vh'}} className=' flex-column align-item-center justify-content-center'>
    <img  className=' mt-5 d-flex align-item-center justify-content-center' src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" width={'300px'}  style={{marginLeft:'500px'}}/>
    <h4 className='text-danger mt-3 d-flex align-item-center justify-content-center'>Your Wishlist is Empty</h4>
    <button id="buttonback" className=' btn btn-success rounded mt-3 w-25 d-flex-align-item-center justify-content-center'><i class="fa-solid fa-arrow-left-long "></i><Link  style={{textDecoration:'none',color:'black'}} className='p-3' to={'/'}>Back to home</Link></button>
   </div>
    }
    
   </Row>
    </div>
  )
}

export default Wishlist