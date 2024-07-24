// src/components/BlogSection.js
import React from 'react';
import '../styles/style.css';
const BlogSection = () => (
  <section className="blog" id="blog">
    <div className="container">
      <div className="title">
        <h2>Latest Blog</h2>
        <p>recent blogs about fashion & trends</p>
      </div>
      <div className="blog-content">
        {/* Blog items */}
        {[
          {
            imgSrc: "https://media.istockphoto.com/id/1367129823/vector/woman-model-fashion-illustration-in-sketch-style.jpg?s=612x612&w=0&k=20&c=dar-AEfQtP7hnDSE-EysIV7dqOSx6SeK1292iHjQlrE=",
            date: "20 January, 2024",
            title: "Lorem ipsum, dolor sit amet consectetur adipisicing",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis libero quas ipsum laudantium nihil! Quaerat."
          }
        ].map((item, index) => (
          <div key={index} className="blog-item">
            <div className="details">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-yi8lUjKNVqmWkbY2plqdttxFpzC2Efcq0g&s" alt="" />
              <span>Shivika</span>
            </div>
            <div className="blog-img">
              <img src={item.imgSrc} alt="" />
              <span><i className="far fa-heart"></i></span>
            </div>
            <div className="blog-text">
              <span>{item.date}</span>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
