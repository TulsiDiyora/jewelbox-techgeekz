import React, { useState } from 'react';
import RingSize from '../RingSize/RingSize';
import AddToCart from '../AddToCart/AddToCart';
import { Carousel } from 'react-bootstrap';
import './Rings.css';


const ProductImages = {
  Pink: [
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontRG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-topRG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-sideRG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-backRG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/01/PRI0623-1.jpg",
  ],
  Gold: [
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontYG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-topYG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-sideYG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-backYG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/01/PRI0623-1.jpg",
  ],
  Silver: [
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-frontWG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-topWG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-sideWG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566-backWG.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/07/WRI1566.jpg",
    "https://d322s37z6qhrgo.cloudfront.net/wp-content/uploads/2024/01/PRI0623-1.jpg",
  ],
};
const Rings = ({ addToCart }) => {
  const [selectedColor, setSelectedColor] = useState('Gold');
  const [selectedPurity, setSelectedPurity] = useState("14Kt");
  const [price, setPrice] = useState(129943);
  const [selectedImage, setSelectedImage] = useState(ProductImages[selectedColor][0]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const changeColor = (color) => {
    setSelectedColor(color);
    setSelectedImage(ProductImages[color][0]);
    setSelectedImageIndex(0);
  };

  const handlePurityChange = (purity) => {
    setSelectedPurity(purity);
    setPrice(purity === "14Kt" ? 129943 : 129102);
  };

  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col-1">
            {ProductImages[selectedColor].map((src, index) => (
              <div key={index} className="ring-img" style={{ marginTop: index === 0 ? "0" : "10px" }}>
                <img src={src} width="90" height="90" alt={`Thumbnail ${index + 1}`} onClick={() => { setSelectedImage(src); setSelectedImageIndex(index); }}
                  style={{ cursor: 'pointer', opacity: index === selectedImageIndex ? '1' : '0.5', borderBottom: index === selectedImageIndex ? '5px solid #000' : 'none', transition: 'opacity 0.3s ease, border-bottom 0.3s ease' }} />
              </div>
            ))}
          </div>
          <div className="col-6">
            <div className="ring-img ms-2">
              <Carousel activeIndex={ProductImages[selectedColor].indexOf(selectedImage)} onSelect={(index) => setSelectedImage(ProductImages[selectedColor][index])} interval={null}>
                {ProductImages[selectedColor].map((src, index) => (
                  <Carousel.Item key={index}>
                    <img className="d-block" src={src} alt={`Slide ${index + 1}`} width={800} height={750} />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="col-5">
            <div className="product-detail ms-5">
              <h6 style={{ fontSize: '14px', color: '#060606', fontFamily: 'Jost, sans-serif' }}>Home » <span style={{ color: '#212529' }}>Unwavering Devotion Diamond Band Ring</span></h6>
              <p style={{ fontSize: '12px', fontFamily: 'Jost', color: '#7D7D7D' }}>SKU: <span style={{ color: '#000000' }} className='fw-medium'>WRI156614YG20</span></p>
              <div id="productDetails">
                <p id="productName" className="product-name mt-1">Unwavering Devotion Diamond Band Ring</p>
                <p id="productPrice" className="product-price mt-2">₹{price.toLocaleString()}</p>
                <h6 className="fw-normal mt-3" style={{ fontSize: "14px" }}>Price inclusive of taxes. See the full <span style={{ color: "#3D8DBE" }}>price breakup<br />
                  Loyalty Special offer for you</span></h6>
              </div>
              <div className="color mt-4 d-flex">
                <h6 className="fw-medium text-uppercase">Colors</h6>
                <div className="d-flex gap-2 ms-5">
                  <button className="color-btn pink-btn" onClick={() => changeColor('Pink')} />
                  <button className="color-btn silver-btn" onClick={() => changeColor('Silver')} />
                  <button className="color-btn gold-btn" onClick={() => changeColor('Gold')} />
                </div>
              </div>

              <div className="purity mt-2 d-flex align-items-center">
                <h6 className="fw-medium text-uppercase mb-0" style={{ fontSize: "14px" }}>Purity</h6>
                <div className="d-flex gap-2" style={{ marginLeft: "55px" }}>
                  <button className="purity-btn" style={{ backgroundColor: selectedPurity === "14Kt" ? "black" : "#f2f2f2", color: selectedPurity === "14Kt" ? "white" : "black" }}
                    onClick={() => handlePurityChange("14Kt")}>14Kt</button>
                  <button className="purity-btn" style={{ backgroundColor: selectedPurity === "18Kt" ? "black" : "#f2f2f2", color: selectedPurity === "18Kt" ? "white" : "black" }}
                    onClick={() => handlePurityChange("18Kt")}>18Kt</button>
                </div>
              </div>

              <RingSize />
              <AddToCart addToCart={addToCart} />

              <div className="delivery mt-3 ">
                <div className="delivery-icon d-flex ">
                  <i class="bi bi-truck "></i>
                  <p className='ms-2 text-uppercase'>Delivery & Cancellation</p>
                </div>
                <span className='fw-semibold' style={{ fontSize: "14px", textDecoration: "underline" }}>Estimated Delivery By 22nd Dec 2024</span>
              </div>
              <div className="pincode mt-3">
                <div className="col-md-6">
                  <label for="pincode" className="form-label fw-semibold" style={{ fontSize: "14px", color: "#7A7A7A" }}>Your Pincode</label>
                  <input type="number" className="form-control" id="pincode" />
                </div>
              </div>
              <div className="view-stock mt-2">
                <button className='add-btn fw-medium'>View in Stock</button>
                <p className='mt-2' style={{ fontSize: "14px", color: "#7A7A7A", fontFamily: "'jost', sans-serif" }}>Click to view available variants</p>
              </div>
              <div className="cate-tages mt-2">
                <h6 style={{ fontSize: "14px", color: "#7A7A7A" }}>CATEGORIES : <spna style={{ color: "#000000", fontSize: "12px" }}>Engagement, Rings, Solitaire</spna></h6>
                <h6 style={{ fontSize: "14px", color: "#7A7A7A" }}>TAGES : <spna style={{ color: "#000000", fontSize: "12px" }}> Emerald,Engagement,Solitaire</spna></h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rings;
