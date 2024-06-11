import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px',color:'white'}} className='d-flex justify-content-center w-100 align-items-center flex-column bg-primary'>
        <div className='d-flex justify-content-evenly align-items-center w-100'>

            <div style={{width:'400px'}} className="websites">
            <h4 className='mb-3'>
            <i class="fa-solid fa-cart-shopping"></i>
               E_CART
            </h4>
            <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa sit qui consectetur, quod animi expedita aliquid nam illum dolorem incidunt. Alias repellat nihil est, amet eius modi suscipit eum?</h6>
            </div>

            <div className="links d-flex flex-column">
            <h4 className='mb-3'>Links</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'white'}}>Home </Link>
                <Link to={'/cart'} style={{textDecoration:'none', color:'white'}}>Cart</Link>
                <Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}}>Wishlist</Link>
            </div>

            <div className="guides d-flex flex-column">
            <h4 className='mb-3'>Guides</h4>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>React</Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}>React Bootstrap</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>Bootswatch</Link>
            </div>

            <div className="contacts d-flex flex-column">
                <h4 className='mb-3'>Contact us</h4>
                <div className='d-flex'>
                    <input type="text" className='form-control' placeholder='Enter e-mail id'/>
                    <button className='btn btn-light ms-2'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-evenly align-items-center mt-3'>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
                </div>
            </div>
            
        </div>
        <p>Copyright claims</p>
    </div>
  )
}

export default Footer