import React from "react";
import "./credits.css";

const creditPackages = [
  { credits: 25, price: "₹500", img: "/coin.gif" },
  { credits: 50, price: "₹750", img: "/coin.gif" },
  { credits: 100, price: "₹1000", img: "/coin.gif" },
];

export default function Credits() {
  return (
    <div className="credits-page">
      <div className="credits-box">
        <h2>Buy Credits</h2>
        
        <div className="cards-wrapper">
          {creditPackages.map((pack, index) => (
            <div className="credit-card" key={index}>
              <img src={pack.img} alt="coin" className="coin-img" />
              <h3>{pack.credits} Credits</h3>
              <p className="price">{pack.price}</p>
              <button className="buy-btn">Buy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
