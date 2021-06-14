import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
        <div className="home_container">
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""></img>
        <div className="home_row">
            <Product
            id="123"
             title="Samsung Galaxy Tab A7 Wi-Fi 32GB Silver" 
            price={179.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/71MvL2kCFCL._AC_SL1500_.jpg'
            rating={4}
            />
             <Product
             id="456"
             title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox" 
            price={109.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/81tjLksKixL._AC_SL1500_.jpg'
            rating={4}
            />
        </div>
        <div className="home_row">
        <Product
        id="789"
        title="32” LED HDTV| CT-3270 HDTV" 
            price={229.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/61I3KeUvKbL._AC_SL1132_.jpg'
            rating={5}
            />
         <Product 
         id="147"
         title="LG OLED55CXPUA Alexa Built-In4K Smart OLED TV" 
            price={359.50} 
            image='https://images-na.ssl-images-amazon.com/images/I/A1LDFBeKebL._AC_SL1500_.jpg'
            rating={5}
            />
         <Product
         id="852" 
         title="SAMSUNG SR35 Series 27 inch FHD 1920x1080 Flat Desktop Monitor " 
            price={147.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/91Vg-6MEI2L._AC_SL1500_.jpg'
            rating={4}
            />
        </div>
        <div className="home_row">
        <Product 
        id="963"
        title="AMD Ryzen 7 3700X 8-Core, 16-Thread Unlocked Desktop Processor with Wraith Prism LED Cooler" 
            price={308.99} 
            image='https://images-na.ssl-images-amazon.com/images/I/717Di3DGIbL._AC_SL1092_.jpg'
            rating={5}
            />
           
        </div>
       
       
        </div>
        </div>
    )
}

export default Home
