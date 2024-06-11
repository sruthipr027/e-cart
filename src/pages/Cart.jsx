import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from '../redux/slices/cartSlice';

function Cart() {
  const cartArray = useSelector((state) => state.cartReducer);
  console.log(cartArray);

  const dispatch = useDispatch();
  const [total , setTotal] = useState(0)
  const navigate = useNavigate()
  const getTotal =()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item => item.price).reduce((p1,p2)=> p1+p2))
    }
    else{
      setTotal(0)
    }
  }

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCart =()=>{
    alert('Thank you ..... Your order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }

  return (
    <div style={{ marginTop: '150px' }}>
      <div className='container'>
        {cartArray?.length > 0 ? (
          <div className='row'>
            <div className='col-lg-8'>
              <table className='table border shadow m-3'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Product</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartArray?.map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.title}</td>
                      <td>
                        <img src={item.thumbnail} alt="" width={'100px'} height={'100px'} />
                      </td>
                      <td>{item.price}</td>
                      <td>
                        <Button onClick={() => dispatch(removeFromCart(item.id))} variant="outline-danger rounded">
                          <i className="fa-solid fa-trash" style={{ color: 'red' }} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='col-lg-4'>
              <div className='border shadow p-5 mt-3'>
                <h2 className='text-primary'>Cart Summary</h2>
                <h5>Total number of products: <span className='text-primary fw-bolder fs-3'>{cartArray.length}</span></h5>
                <h5>Total Price :₹{total} </h5>
                <button onClick={handleCart} className='btn btn-success rounded w-100 mt-3'>Checkout</button>
              </div>
            </div>
          </div>
        ) : (
          <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
            <img style={{ width: '200px' }} src="https://statementclothing.net/images/cart.gif" alt="" />
            <h4 className='text-primary mt-3'>Your cart is empty</h4>
            <Link to={'/'}>
              <button className='btn btn-outline-success'>
                Add to cart <i className="fa-solid fa-plus"></i>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
