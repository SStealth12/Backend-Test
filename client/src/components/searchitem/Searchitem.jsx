import "./searchitem.css"

const Searchitem = () => {
    return (
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
                    <button className="btn-action">
                        <ion-icon name="heart-outline"></ion-icon>
                    </button>

                    <button className="btn-action">
                        <ion-icon name="bag-add-outline"></ion-icon>
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
    )
}

export default Searchitem