import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 4 }
];

export default function CarousalSection() {
    const [items, setItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

    //   const addItem = () => {
    //     const nextItem = Math.max(1, items.length + 1);
    //     setItems([...items, nextItem]);
    //   };

    //   const removeItem = () => {
    //     const endRange = Math.max(0, items.length - 1);
    //     setItems(items.slice(0, endRange));
    //   };

    return (
        <div className="carousal-sec">
            {/* <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div> */}
     
            <div className="carousel-wrapper">
                <Carousel breakPoints={breakPoints}>
                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>
                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>
                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>
                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>
                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>
                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>

                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>
                    <div className='carousal-card p-3rounded'>
                        <img
                            src="/buyer.svg"
                            width="auto"
                            height="48"
                            className="d-inline-block align-top carousal-card-img"
                            alt="React Bootstrap logo"
                        />
                        <div className='Location-title'>
                            <h5 className='f-w-700'>Lorem Ipsum</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing</p>
                        </div>
                        {/* <div className='location-status'>
                            <p className='dropicon'>-6.82 </p>
                        </div> */}
                    </div>


                    {/* {items.map((item) => (
            <Item key={item}>{item}</Item>
          ))} */}
                </Carousel>
            </div>
        </div>
    );
}

