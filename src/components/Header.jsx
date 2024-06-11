import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

function Header() {
  //to access the state value
const wishList=useSelector((state)=>state.wishlistReducer)
console.log(wishList);

const cart=useSelector((state)=>state.cartReducer)
console.log(cart);

  return (
    <Navbar expand="lg" className="bg-primary fixed-top">
    <Container>
      <Navbar.Brand href="#home"> <i class="fa-solid fa-cart-shopping ms-3 fa-beat " style={{color:'white'}}></i>
<Link style={{textDecoration:'none',color:'white'}} to={'/'}>E-CART</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border border-success-rounded ms-3 mt-2' href="#home"><i class="fa-solid fa-heart me-2" style={{color:'red'}}></i><Link style={{textDecoration:'none',color:'white'}} to={'/wishlist'}>wishlist <Badge bg="light" className='rounded ms-2'>{wishList.length}</Badge></Link></Nav.Link>
          <Nav.Link  className='btn border border-success-rounded ms-3 mt-2' href="#link"><i class="fa-solid fa-cart-shopping"  style={{color:'green'}}></i><Link style={{textDecoration:'none',color:'white'}} to={'/cart'}>Cart <Badge bg="light" className='rounded ms-2'>{cart.length}</Badge></Link></Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header