import Desktopnav from "../../components/desktopnav/Desktopnav"
import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import Footer from "../../components/footer/Footer"
import Mysearchitem from "../../components/mysearchitem/Mysearchitem"
import { Helmet } from 'react-helmet';
import "./mylist.css"
const Mylist = () => {
  return (
    <div className='view-listing'>
        <Promobar />
        <Navbar />
        <Desktopnav />
        
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
                       <Mysearchitem />
                       <Mysearchitem />
                       <Mysearchitem />
                       <Mysearchitem />
                       <Mysearchitem />
                       <Mysearchitem />
                       <Mysearchitem />
                       <Mysearchitem />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Mylist