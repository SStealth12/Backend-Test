import { Helmet } from 'react-helmet';
import "./navbar.css"
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Navbar = () => {
    const [searchInput, setSearchInput] = useState('');
    const navigate = useNavigate()

    const handleSearch = () => {
        navigate("/listings/search", { state: {searchQuery: searchInput} });
    }


    return (
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
                        placeholder="Search for a service.."
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
    )
}

export default Navbar