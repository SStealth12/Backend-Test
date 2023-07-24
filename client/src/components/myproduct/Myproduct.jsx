import { Helmet } from 'react-helmet';
import "./myproduct.css"

const Product = () => {
    return (
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
                    <h2 className="title">My Service Listings</h2>

                    <div className="product-grid">
                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/1.png"
                                    alt="Dog Grooming"
                                    width="300"
                                    className="product-img default"
                                />
                                <img
                                    src="/assets/images/services/1.png"
                                    alt="Dog Grooming"
                                    width="300"
                                    className="product-img hover"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Grooming</a>

                                <a href="listings-detailed-1.html">
                                    <h3 className="showcase-title">Dog Grooming</h3>
                                    <h3 className="showcase-company">Fur-Ever Fresh</h3>
                                </a>

                                <div className="price-box">
                                    <p className="price">₱48.00</p>
                                    <del>₱75.00</del>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/2.png"
                                    alt="Spa"
                                    className="product-img default"
                                    width="300"
                                />
                                <img
                                    src="/assets/images/services/2.png"
                                    alt="Spa"
                                    className="product-img hover"
                                    width="300"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Spa</a>

                                <h3>
                                    <a href="listings-detailed-2.html" className="showcase-title"
                                    >Aromatheraphy Massage</a
                                    >
                                    <h3 className="showcase-company">The Tranquility Spa Co.</h3>
                                </h3>

                                <div className="price-box">
                                    <p className="price">₱45.00</p>
                                    <del>₱56.00</del>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/3.png"
                                    alt="Electronics Repair"
                                    className="product-img default"
                                    width="300"
                                />
                                <img
                                    src="/assets/images/services/3.png"
                                    alt="Electronics Repair"
                                    className="product-img hover"
                                    width="300"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Electronics</a>

                                <h3>
                                    <a href="listings-detailed-3.html" className="showcase-title"
                                    >Smartphone Repair</a
                                    >
                                    <h3 className="showcase-company" color="#A0C1B8">
                                        Electronic Rx
                                    </h3>
                                </h3>

                                <div className="price-box">
                                    <p className="price">₱58.00</p>
                                    <del>₱65.00</del>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/4.png"
                                    alt="Tire Vulcanizing"
                                    className="product-img default"
                                    width="300"
                                />
                                <img
                                    src="/assets/images/services/4.png"
                                    alt="Tire Vulcanizing"
                                    className="product-img hover"
                                    width="300"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Auto</a>

                                <h3>
                                    <a href="listings-detailed-4.html" className="showcase-title"
                                    >Tire Vulcanizing</a
                                    >
                                    <h3 className="showcase-company">Precision Auto Repair</h3>
                                </h3>

                                <div className="price-box">
                                    <p className="price">₱25.00</p>
                                    <del>₱35.00</del>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/5.png"
                                    alt="Hairdressing"
                                    className="product-img default"
                                    width="300"
                                />
                                <img
                                    src="/assets/images/services/5.png"
                                    alt="Hairdressing"
                                    className="product-img hover"
                                    width="300"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Haircuts and Styling</a>

                                <h3>
                                    <a href="listings-detailed-5.html" className="showcase-title"
                                    >Hairdressing</a
                                    >
                                    <h3 className="showcase-company">Shear Elegance</h3>
                                </h3>

                                <div className="price-box">
                                    <p className="price">₱99.00</p>
                                    <del>₱105.00</del>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/6.png"
                                    alt="Denture Fitting"
                                    className="product-img default"
                                    width="300"
                                />
                                <img
                                    src="/assets/images/services/6.png"
                                    alt="Denture Fitting"
                                    className="product-img hover"
                                    width="300"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Dental</a>

                                <h3>
                                    <a href="listings-detailed-6.html" className="showcase-title"
                                    >Denture Making</a
                                    >
                                    <h3 className="showcase-company">Smile Innovations</h3>
                                </h3>

                                <div className="price-box">
                                    <p className="price">₱150.00</p>
                                    <del>₱170.00</del>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/7.png"
                                    alt="Doggy Day Care"
                                    className="product-img default"
                                    width="300"
                                />
                                <img
                                    src="/assets/images/services/7.png"
                                    alt="Doggy Day Care"
                                    className="product-img hover"
                                    width="300"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Day Care</a>

                                <h3>
                                    <a href="listings-detailed-7.html" className="showcase-title"
                                    >Doggy Day Care</a
                                    >
                                    <h3 className="showcase-company">Canine Oasis</h3>
                                </h3>

                                <div className="price-box">
                                    <p className="price">₱100.00</p>
                                    <del>₱120.00</del>
                                </div>
                            </div>
                        </div>

                        <div className="showcase">
                            <div className="showcase-banner">
                                <img
                                    src="/assets/images/services/8.png"
                                    alt="Plumbing"
                                    className="product-img default"
                                    width="300"
                                />
                                <img
                                    src="/assets/images/services/8.png"
                                    alt="Plumbing"
                                    className="product-img hover"
                                    width="300"
                                />

                                <div className="showcase-actions">
                                    <button className="btn-del">
                                        Delete Listing
                                    </button>

                                    <button className="btn-upd">
                                        Update Listing
                                    </button>
                                </div>
                            </div>

                            <div className="showcase-content">
                                <a href="/#" className="showcase-category">Home</a>

                                <h3>
                                    <a href="listings-detailed-8.html" className="showcase-title"
                                    >Plumbing Repairs</a
                                    >
                                    <h3 className="showcase-company">Ace Plumbing Services</h3>
                                </h3>

                                <div className="price-box">
                                    <p className="price">₱25.00</p>
                                    <del>₱30.00</del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product