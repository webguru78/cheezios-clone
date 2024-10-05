import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import App from '../App';
const Cheezious = () => {
  return (
   <section id="Home">
  <nav className="navbar navbar-expand-lg bg">
    <div className="container">
      <a className="navbar-brand " href="#"><i class="fa-solid fa-location-dot"></i></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-center">
          <li className="nav-item">
            <img src='./image/logo.png' className='img-fluid  image'/>
          </li>
        </ul>
        <ul className="navbar-nav  mb-2 mb-lg-0 text-center ">
          <li className="nav-item">
            <div className='icons'>
             <i class="fa-solid fa-magnifying-glass"></i>
             <i class="fa-regular fa-user"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            </div>
          </li>
        </ul>
      
      </div>
    </div>
  </nav>

  <div className='container slider'>
  <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./image/bg1.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./image/bg2.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./image/bg3.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./image/bg4.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="./image/bg5.jpg" className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev btn" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next btn" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </div>

  <div className='container'>
    <div className='row'>
        <div className='col-md-2 col-sm-4'>
            <div className='items'>
            <h5 style={{backgroundColor: '#FFCB04'}}>Startes</h5>

            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Somewhat Local</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Burgerz</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Crazy Treats</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Pizza Deals</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Burger Deals</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Pastas</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Side Orders</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Addons</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Sandwich</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Platters</h5>
            </div>
        </div>
        <div className=' col-md-2 '>
            <div className='items'>
                    <h5 className='items-text'>Shawarma</h5>
            </div>
        </div>
    </div>
  </div>

</section>

  )
}

export default Cheezious
