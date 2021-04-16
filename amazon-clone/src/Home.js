import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image" src="https://images.unsplash.com/photo-1553047427-a6a0ddcbb0d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="" />

                <div className="home__row">
                    <Product title="Little Women by Louisa May Alcott (Nonfiction)" price={999} image="https://images4.penguinrandomhouse.com/cover/9781984898852" rating={4} />
                    <Product title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Grey (4th Generation) " price={89900.00} image="https://images-na.ssl-images-amazon.com/images/I/811aBwuSuIL._SL1500_.jpg" rating={4} />
                    <Product title="New Apple Watch SE (GPS, 44mm) - Space Grey Aluminium Case with Black Sport Band " price={32900.00} image="https://images-na.ssl-images-amazon.com/images/I/71rhrO49SmL._SL1500_.jpg" rating={4} />
                    <Product title="Apple MacBook Pro (16-inch, 16GB RAM, 1TB Storage, 2.3GHz 9th Gen Intel Core i9) - Space Grey  " price={239900.00} image="https://static.bhphoto.com/images/images2500x2500/1605031209_1604811.jpg" rating={4} />
                </div>
                <div className="home__row">
                    <Product title="Apple AirPods with Wireless Charging Case  (2th Generation) " price={15990.00} image="https://images-na.ssl-images-amazon.com/images/I/71IPFP9WJIL._SL1500_.jpg" rating={4} />
                    <Product title="New Apple iPhone 12 Pro Max (128GB) - Pacific Blue  " price={124704.00} image="https://images-na.ssl-images-amazon.com/images/I/71MHTD3uL4L._SL1500_.jpg" rating={5} />
                    <Product title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)  " price={3499.00} image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg" rating={3} />
                </div>
                <div className="home__row">
                    <Product title="Beats Solo Pro Wireless Noise Cancelling On-Ear Headphones - Grey " price={25900.00} image="https://m.media-amazon.com/images/I/61w+edOrp9L._SL1500_.jpg" rating={4} />
                    <Product title="Kindle (10th Gen), 6' Display with Built-in Light,WiFi (Black)  " price={7999.00} image="https://images-na.ssl-images-amazon.com/images/I/61DCWZlmnOL._SL1000_.jpg" rating={5} />
                </div>
                <div className="home__row last__image">
                    <Product title="Samsung 49 inch Curved 21:9 Ultrawide Gaming Monitor - 144Hz, 1ms, Full HD, IPS Panel with HDMI, Display Port, USB, Audio Out, Heaphone Ports - 34UC79G (Black)" price={25500.00} image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg" rating={5} />
                </div>
            </div>
        </div>
    );
}

export default Home;
