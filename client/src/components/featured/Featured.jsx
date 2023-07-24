import React from 'react'
import Searchitem from "../../components/searchitem/Searchitem"
import useFetch from '../../hooks/useFetch'
const Featured = () => {

    const { data, loading, error } = useFetch("")

  return (
    <div className='featured'>
        <div className="container">
          <div className="product-main">
            <h2 className="title">Featured Listings</h2>

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
  )
}

export default Featured