import React from 'react';
import bannerPhoto from "../images/photo3.jpg";
import { Link } from "react-router-dom";
import menuList from "../data/menuList";
import reviewList from '../data/reviewList';

function Homepage () {
  return (
    <main>
      <div className="banner">
        <div className="bannerText">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, located on Maldove Street in Chicago, Illionis. We focus on traditional recipes served with a modern twist.</p>
          <Link to="/reservation" className="actionBtn">
            Reserve a Table
          </Link>
        </div>
        <div className='bannerImg'>
          <img src={bannerPhoto} alt="banner"></img>
        </div>
      </div>
      <div className="menu">
        <h2>This weeks specials</h2>
        <Link to="/order" className="actionBtn">Order for Devlivery</Link>
        <div className="menuList">
          {
            menuList.map(item => {
              return (
                <article className='menuCard' key={item.name}>
                  <img alt={item.name} src={require(`../images/${item.img}`)}></img>
                  <div className="menuDetail">
                    <h2>{item.name}</h2>
                    <p>{item.desc}</p>
                  </div>
                  <Link to="/order" className='actionBtn'>Order for Devlivery</Link>
                </article>
              )
            })
          }
        </div>
      </div>
      <div className='review'>
        <h2>Review</h2>
        <div className='reviewList'>
          {
            reviewList.map(item => {
              return (
                <div className="reviewCard" key={item.name}>
                  <p>" {item.review} "</p>
                  <h4>{item.name}</h4>
                </div>
              )
            })
          }
        </div>
      </div>
    </main>
  );
}

export default Homepage;