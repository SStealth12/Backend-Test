import Promobar from '../../components/promobar/Promobar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';

import "./service.css"

function Service() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js/listings-detailed.js'; // The path to your external JavaScript file
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='Service'>
      <Promobar />
      <Navbar />
      

      <div className="card-wrapper">
        <Helmet>
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          />
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          />
        </Helmet>
        <div className="card">
          <div className="product-imgs">
            <div className="img-display">
              <div className="img-showcase">
                <img src="/assets/images/services/1.png" alt="dog grooming" />
                <img src="/assets/images/services/1.png" alt="dog grooming" />
                <img src="/assets/images/services/1.png" alt="dog grooming" />
                <img src="/assets/images/services/1.png" alt="dog grooming" />
              </div>
            </div>
            <div className="img-select">
              <div className="img-item">
                <a href="/#" data-id="1">
                  <img src="/assets/images/services/1.png" alt="dog grooming" />
                </a>
              </div>
              <div className="img-item">
                <a href="/#" data-id="2">
                  <img src="/assets/images/services/1.png" alt="dog grooming" />
                </a>
              </div>
              <div className="img-item">
                <a href="/#" data-id="3">
                  <img src="/assets/images/services/1.png" alt="dog grooming" />
                </a>
              </div>
              <div className="img-item">
                <a href="/#" data-id="4">
                  <img src="/assets/images/services/1.png" alt="dog grooming" />
                </a>
              </div>
            </div>
          </div>
          <div className="product-content">
            <h2 className="product-title">Dog Grooming</h2>


            <div className="product-price">
              <p>Old Price: <span>₱75.00</span></p>
              <p className="new-price">New Price: <span>₱48.00</span></p>
            </div>

            <div className="service-provider">
              <p> Service Provider: Fur-Ever Fresh</p>
              <p> Address: 123 Maple Street, Anytown, Philippines</p>
            </div>

            <div className="product-detail">
              <h2>about this Service: </h2>
              <p>At our dog grooming service, we provide top-quality care and pampering for your furry companions. Our experienced groomers are skilled
                in handling dogs of all breeds and sizes, ensuring a comfortable and stress-free grooming experience. From stylish haircuts and gentle
                bathing to nail trimming and ear cleaning, we strive to make your dog look and feel their best, leaving them fresh, clean, and
                tail-waggingly happy.</p>

            </div>

            <div className="purchase-info">

              <button type="button" className="btn">
                Book Now <i className="fas fa-shopping-cart"></i>
              </button>
            </div>

            <div className="social-links">
              <a href="/#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="/#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="/#">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
              <a href="/#">
                <ion-icon name="call"></ion-icon>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>

    
  )
}

export default Service