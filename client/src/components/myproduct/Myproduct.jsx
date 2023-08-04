import useFetch from '../../hooks/useFetch'
import "./myproduct.css"
import { AuthContext } from '../../context/AuthContext';
import React, { useContext } from 'react';

const Product = () => {
    const { user, dispatch } = useContext(AuthContext);

    const { data, loading, error } = useFetch(`/listing?createdBy=${user.email}`)

    return (
        <div className='myproduct'>
            <div className="container">
                <div className="product-main">
                    <h2 className="title">My Service Listings</h2>
                    <div className="product-grid">
                        {loading ? (
                            "Loading"
                        ) : (
                            <>
                                {data.map((item) => (
                                    <div className="showcase" key={item._id}>
                                        <div className="showcase-banner">
                                            {item.type === "Grooming" ? (
                                                <>
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
                                                </>
                                            ) : (
                                                <img
                                                    src="/assets/images/services/1.png"
                                                    alt="Dog Grooming"
                                                    width="300"
                                                    className="product-img default"
                                                />
                                            )}

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
                                            <a href={`/listings/${item._id}`} className="showcase-category">{item.type}</a>

                                            <a href={`/listings/${item._id}`} >
                                                <h3 className="showcase-title">{item.name}</h3>
                                                <h3 className="showcase-company">{item.provider}</h3>
                                            </a>

                                            <div className="price-box">
                                                <p className="price">₱{item.newPrice}</p>
                                                <del>₱{item.oldPrice}</del>
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

export default Product