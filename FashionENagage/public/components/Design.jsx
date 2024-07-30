// src/components/DesignSection.js
import React from 'react';
import '../styles/style.css';

const Design = () => (
  <section className="design" id="design">
    <div className="container">
      <div className="title">
        <h2>Recent Fashion & Trends</h2>
        <p>recent Fashion & Trends on the blog</p>
      </div>
      <div className="design-content">
        {/* Design items */}
        {[
          {
            imgSrc: "https://static.fibre2fashion.com/articleresources/images/91/9076/1_files/image004.jpg?v=20210616T144221",
            likes: 12,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, odit!"
          },
          {
            imgSrc: "https://images.bewakoof.com/web/latest-fashion-trends-bewakoof-blog-7-1621402705.jpg",
            likes: 22,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, non."
          },
          {
            imgSrc: "https://images.bewakoof.com/web/latest-fashion-trends-bewakoof-blog-15-1621402709.jpg",
            likes: 2,
            title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, veniam?"
          }
        ].map((item, index) => (
          <div key={index} className="design-item">
            <div className="design-img">
              <img src={item.imgSrc} alt="" />
              <span><i className="far fa-heart"></i> {item.likes}</span>
              <span>Fashion & Trends</span>
            </div>
            <div className="design-title">
              <a href="#">{item.title}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Design;
