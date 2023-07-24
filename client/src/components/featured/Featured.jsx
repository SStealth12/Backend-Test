import React from 'react'
import useFetch from '../../hooks/useFetch'
const Featured = () => {

    const { data, loading, error } = useFetch("/listing?featured=true")

    return (
        <div className='featured'>
            <div className="container">
                <div className="product-main">
                    <h2 className="title">Featured Listings</h2>
                    <div className="product-grid">
                        {loading ? (
                            "Loading"
                        ) : (
                            <>
                                {data.map((item) => (
                                    <div className="showcase" key={item._id}>
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

                                            <a href="listings-detailed-1.html">
                                                <h3 className="showcase-title">{item.name}</h3>
                                                <h3 className="showcase-company">{item.provider}</h3>
                                            </a>

                                            <div className="price-box">
                                                <p className="price">{item.newPrice}</p>
                                                <del>{item.oldPrice}</del>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </>)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Featured