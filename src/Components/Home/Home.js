import React from 'react';
import './Home.css';
import Product from '../../Components/Product/Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt=""
                />
                <div className="home__row">
                    <Product
                        id="12321341"
                        title="A Song Of Ice And Fire - A Game Of Thrones: The Complete Boxset Of 7 Books Publisher:
                        HarperCollins Publishers"
                        price={2849.99}
                        rating={5}
                        image="data:image/jpeg;base64,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"
                    />
                    <Product
                        id="49538094"
                        title="Sujata Dynamix DX Mixer Grinder, 900W, 3 Jars (White). Most powerful 900 watts motor with double ball bearings for efficiency, low maintenance and trouble free running for years"
                        price={6179.59}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/61LiqtUqzSL._SL1405_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="4903850"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                        price={19999.99}
                        rating={3}
                        image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    />
                    <Product
                        id="23445930"
                        title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                        price={9899.99}
                        rating={5}
                        image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    />
                    <Product
                        id="3254354345"
                        title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                        price={15980.99}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                    />
                </div>

                <div className="home__row">
                    <Product
                        id="90829332"
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                        price={20940.98}
                        rating={4}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
