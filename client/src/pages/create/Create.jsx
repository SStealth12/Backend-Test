
import Desktopnav from "../../components/desktopnav/Desktopnav"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Promobar from "../../components/promobar/Promobar"
import "./create.css"

const Create = () => {
    return (
        <div className='create-listing'>
            <Promobar />
            <Navbar />
            <Desktopnav />

            <div class="banner">

                <div class="container">

                    <div class="slider-container has-scrollbar">

                        <div class="slider-item">

                            <img src="./assets/images/create-banner1.svg" alt="bg1 banner" class="banner-img" />


                        </div>

                        <div class="slider-item">

                            <img src="./assets/images/create-banner2.svg" alt="bg2 banner" class="banner-img" />

                        </div>

                    </div>

                </div>

            </div>

            <div className="content">
                <h2>Create Service Listings</h2>
                <p>Service providers can create listings for the services they offer.</p>
                <form className="listing-form" id="serviceListingForm">
                    <label htmlFor="title">Service Title:</label>
                    <input type="text" id="title" name="title" required />

                    <label htmlFor="description">Service Description:</label>
                    <textarea id="description" name="description" required></textarea>

                    <div className="form-row">
                        <div className="form-column">
                            <label htmlFor="price">Price:</label>
                            <input type="text" id="price" name="price" required />
                        </div>
                        <div className="form-column">
                            <label htmlFor="serviceprovider">Service Provider:</label>
                            <input type="text" id="serviceprovider" name="serviceprovider" required />
                        </div>
                    </div>

                    <label htmlFor="location">Location:</label>
                    <input type="text" id="location" name="location" required />

                    <div className="button-container">
                        <label htmlFor="images">Choose Files:</label>
                        <input type="file" id="images" name="images" accept="image/*" multiple required />
                        <button type="submit">Create Listing</button>
                    </div>
                </form>
            </div>



            <Footer />
        </div>
    )
}

export default Create