import "./searchitem.css"

const Searchitem = ({item}) => {
    return (
        <div className="showcase">
            <div className="showcase-banner">
                <img
                    src={item.photos[0]}
                    alt=""
                    width="300"
                    className="product-img default"
                />
                <img
                    src={item.photos[0]}
                    alt=""
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
                <a href="/#" className="showcase-category">{item.type}</a>

                <a href={`/listing/${item._id}`}>
                    <h3 className="showcase-title">{item.name}</h3>
                    <h3 className="showcase-company">{item.provider}</h3>
                </a>

                <div className="price-box">
                    <p className="price">₱{item.newPrice}</p>
                    <del>₱{item.oldPrice}</del>
                </div>
            </div>
        </div>
    )
}

export default Searchitem