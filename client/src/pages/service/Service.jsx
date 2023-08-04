import Promobar from '../../components/promobar/Promobar'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { useState } from "react";
import useFetch from '../../hooks/useFetch';

import "./service.css"
import { useLocation } from 'react-router-dom';
import Desktopnav from '../../components/desktopnav/Desktopnav';
import Popup from '../../components/popup/Popup';

function Service() {
  useEffect(() => {
    const imgs = document.querySelectorAll('.img-select a');
    const imgBtns = [...imgs];
    let imgId = 1;

    imgBtns.forEach((imgItem) => {
      imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
      });
    });

    function slideImage() {
      const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

      document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
    }

    window.addEventListener('resize', slideImage);
  }, []);

  const location = useLocation();
  console.log(location)
  const id = location.pathname.split("/")[2];
  console.log(id)

  const { data, loading, error } = useFetch(`/listing/find/${id}`)

  const [openModal, setOpenModal]= useState(false);
  const handleClick = () => {
    setOpenModal(true);
  }

  return (
    <div className='Service'>
      <Promobar />
      <Navbar />
      <Desktopnav />


      {loading ? ("loading") : (<div className="card-wrapper">
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
            <h2 className="product-title">{data.name}</h2>


            <div className="product-price">
              <p>Old Price: <span>₱{data.oldPrice}</span></p>
              <p className="new-price">New Price: <span>₱{data.newPrice}</span></p>
            </div>

            <div className="service-provider">
              <p> Service Provider: {data.provider}</p>
              <p> Address: {data.address}</p>
            </div>

            <div className="product-detail">
              <h2>About this Service: </h2>
              <p>{data.description}</p>

            </div>

            <div className="purchase-info">

              <button onClick={handleClick} type="button" className="btn">
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
      </div>)}
      <Footer />
      {openModal && <Popup setOpen={setOpenModal} listingId={id}/>}
    </div>


  )
}

export default Service