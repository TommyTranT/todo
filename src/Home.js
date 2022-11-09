import React from 'react'
import "./Home.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from './App';

function Home() {
  return (
    <div>
      <section class="section-one">
        <div class="container">
          <h1>Welcome To Your Wishlists</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>

          <Link to="/" className='home-button'>Create Wishlist</Link>
          <Switch>

            <Route path='/'>

            </Route>
          </Switch>
        </div>
      </section>

      <section class="section-two">
        <div class="container-two">
          <div class="container-two-content content">
            <h1>Title</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div class="container-two-content content-image">
            <img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v996-009_1-kroir4dk.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=dcb55d36929676d81bb5f66b7e091fe8" />
          </div>
        </div>
      </section>
    </div >


  )
}

export default Home