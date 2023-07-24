import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import Desktopnav from "../../components/desktopnav/Desktopnav"
import Banner from "../../components/banner/Banner"
import Footer from "../../components/footer/Footer"
import { Helmet } from 'react-helmet';
import "./home.css"
import Searchitem from "../../components/searchitem/Searchitem"


const Home = () => {
  return (
    <div className="homepage">
      <Promobar />
      <Navbar />
      <Desktopnav />
      <Banner />
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
            <h2 className="title">Service Listings</h2>

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
      <Footer />
    </div>
  )
}

export default Home