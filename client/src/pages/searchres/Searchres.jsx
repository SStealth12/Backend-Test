import Promobar from '../../components/promobar/Promobar'
import Footer from '../../components/footer/Footer'
import Desktopnav from '../../components/desktopnav/Desktopnav'
import Searchitem from '../../components/searchitem/Searchitem';
import "./searchres.css"

import { useLocation } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';



const Searchres = () => {

  const location = useLocation();
  const [searchInput, setSearchInput] = useState(location.state?.searchInput || '');
  const navigate = useNavigate()

  const [searchResultsTitle, setSearchResultsTitle] = useState('Search Results');

  const handleSearch = () => {
    navigate("/listings/search", { state: { searchQuery: searchInput } });
    setSearchInput('');
  }

  useEffect(() => {
    if (location.state?.searchQuery) {
      setSearchResultsTitle(`Search Results for "${location.state.searchQuery}"`);
    } else {
      setSearchResultsTitle('Search Results');
    }
  }, [location.state]);


  return (
    <div className='search-results'>
      <Promobar />

      <div className="header-main">
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

        <div className="container">
          <a href="/#" class="header-logo">
            <img
              src="/assets/images/logo/localize_logo.png"
              alt="Localize Logo"
              width="150"
              height="30"
            />
          </a>

          <div className="header-search-container">
            <input
              type="search"
              id="searchInput"
              name="search"
              className="search-field"
              placeholder="Search for a service..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />

            <button className="search-btn left-btn" onClick={handleSearch}>
              <ion-icon name="search-outline"></ion-icon>
            </button>

            <button className="category-btn" onclick="search()">
              <ion-icon name="reorder-three-outline"></ion-icon>
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              <ion-icon name="person-outline"></ion-icon>
            </button>

            <button className="action-btn">
              <ion-icon name="heart-outline"></ion-icon>
              <span class="count">0</span>
            </button>

            <button className="action-btn">
              <ion-icon name="bag-handle-outline"></ion-icon>
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>

      <Desktopnav />

      <div className='results-listings'>
        <div className="product-container">
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

          <div className="container">
            <div className="product-main">
              <h2 className="title">{searchResultsTitle}</h2>

              <div className="product-grid">
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
                <Searchitem />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Searchres