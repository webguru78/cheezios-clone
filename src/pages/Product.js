import React from 'react'
import { products } from '../data/Data'
const Product = () => {
  return (
    <div className='container'>
      <h3 className='starter'>Starters</h3>
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title p-2'>{item.title}</h5>
                        <h5 className='card-title p-3'>{item.price}</h5>
                        <p className='card-text p-1'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }
    </div>
    <div className='container'>
      <h3 className='starter'>Somewhat Local</h3> 
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Somewhat Sooper
</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Cheezy Treats
</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Pizza Deals
</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Sandwiches</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Special Pizza
</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Somewhat Amazing
</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Burgerz</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Addons</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Starters</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>

    <div className='container'>
      <h3 className='starter'>Starters</h3>
    
    <div className='row'>
    {
        products.map((item,i)=>{
            return(
                <div className='col-sm-6 col-md-4 col-lg-3 col-12 mb-4 text-center' key={i}>
                    <div className='card'>
                        <img src={item.image} className='img-fluid card-img-top' alt=''/>
                        <div className='card-body'>
                        <h5 className='card-title '>{item.title}</h5>
                        <h5 className='card-title'>{item.price}</h5>
                        <p className='card-text'>{item.description}</p>
                        <button className='btn btn-danger'>Add to Cart</button>
                        </div>
                    </div>
                    </div>
            )
        })
    }

    </div>
    
    </div>


    <section id='faq'>
    <div className='container faq'>
    <div className='row'>
    <div className='col-md-12'>
    <div className='faq-text'>
    <h2>Spreading Cheezy Khushiyan</h2>
    </div>
    </div>
    </div>
  </div>

  <div class="accordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Carving for Something Cheesy and Magical?
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">A deal that is light on the pocket yet packed with flavors that are all set to tantalize your taste buds?

If yes, then order your favorite deals from Cheezious right away!

We offer a variety of fast food items in our menu, including your favorite pizza and burger bursting with flavors.

Even if at midnight you crave for something super delicious, dine-in isn't possible while you search for pizza delivery near me.

We provide pizza delivery in Islamabad, Rawalpindi, Wah Cant, Peshawar, Lahore, Sahiwal, Okara, Pattoki and Main Chunnu so if you're residing in these cities, it is time you get hold of the best tasting fast food in town that too at minimum prices.

We promise, our rates are affordable with uncompromised taste and unmatched services. And if you have a family gathering to entertain, why not avail best possible guest service along with authentic food?

Let Cheezious give you authentic food taste which is served piping hot and fresh. What are you waiting for? Order NOW!</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Why Cheezious Deals?
      </button>
    </h2>
    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
Starters
Cheezy Sticks
Cheezy Sticks
Freshly Baked Bread Filled With The Yummiest Cheese Blend To Satisfy Your Cravings.

Rs. 630.00
Oven Baked Wings
Oven Baked Wings
Fresh Oven Baked Wings Served With Dip Sauce

from Rs. 600.00
Flaming Wings
Flaming Wings
Fresh Oven Baked Wings Tossed In Hot Peri Peri Sauce And Served With Dip Sauce

from Rs. 650.00
Calzone Chunks
Calzone Chunks
4 Pcs Stuffed Calzone Chunks Served with Sauce & Fries

Rs. 1,150.00
Arabic Rolls
Arabic Rolls
4 Pcs Arabic Rolls Stuffed with Yummiest Mix Served with Sauce

Rs. 690.00
Behari Rolls
Behari Rolls
4 Pcs Behari Rolls Stuffed with Yummiest Mix Served with Sauce

Rs. 690.00
Somewhat Local
Chicken Tikka
Chicken Tikka
Tender Chunks of Marinated Grilled Chicken with Savory Onion

from Rs. 690.00
Chicken Fajita
Chicken Fajita
An Authentic Taste of Fajita Marinated Chicken Onion and Bell Peppers.

from Rs. 690.00
Chicken Lover
Chicken Lover
Extreme Quantity of Chicken and Onion with Rich Mozzarella Cheese

from Rs. 690.00
Vegetable Pizza
Vegetable Pizza
Vegetables, Pizza Sauce And Cheese

from Rs. 690.00
Chicken Tandoori
Chicken Tandoori
Our Traditionally Developed Tandoori Chicken with Onion, Olives, Jalapeno and Tomato Sauce

from Rs. 690.00
Hot N Spicy
Hot N Spicy
Hot and Spicy Chicken Onion, Jalapeno
</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
       So What Make us different from the rest?</button>
    </h2>
    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">The TASTE, of course! And our deals too!

We bring to you the best Bazinga burger deals at Cheezious so even if you're a student with a few bucks in your pocket, you can still enjoy the most delicious food in town by ordering from us.

Are you up for looking for the best and affordable Bazinga burger deals? We bet you won't find deals better than ours.

Moreover, our deals aren't just restricted to your favorite, crispy burgers. We also have some bombastic deals being offered on our special pizza, calzone and other edible items that'll shout 'AMAZING'.

We are sure, once you try our food, you'll come back for more!

Pizza and burger is something you can eat anytime and anywhere, right? But a legit pizza is one that is oozing with melted cheese and full of your favorite topping, which is hard to find!

If you've been in search of the best pizza deals than you're in for a surprise because Cheezious is here to give you a taste of the original.</div>
    </div>
  </div>
</div>
    </section>
   <div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
      </ul>
    </div>
  </footer>
</div>


    
    </div>

    

    

  )
}

export default Product
