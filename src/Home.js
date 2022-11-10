import React from "react";
import "./Home.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import App from "./App";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import blackFont from "./blackFont.png";


function Home() {
  return (
    <div>
      <section className="section-one">
        <div className="container">
          <h1>Welcome To Custom List</h1>
          <p>Add any item from any website in One custom list!</p>

          <Link to="/" className="home-button btn1">
            Get Started!
          </Link>
          <Switch>
            <Route path="/"></Route>
          </Switch>
        </div>
      </section>

      <div className="displayIcon">

      </div>



      <div className="display">
        <p className="cardsTitle">A Custom List For Any Occasion</p>
        <div className="images">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://c.tadst.com/gfx/750w/istock-493559502.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" >
                Holiday List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get in the festive spirit with a Holiday list for all the family, share with everyone and let them tick off what they'll get.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://d.newsweek.com/en/full/1985071/birthday-cake.jpg?w=1600&h=1200&q=88&f=a8c9cb27296bf01028110bd0a08ebb41"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Birthday Gift List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get what you always wanted with a unique birthday list, send to family and friends and let them tick off what they'll get.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://bnsec.bluenile.com/bluenile/is/image/bluenile/2022Q3_WEDD_EssentialsCollage_CouplesBands?hei=1213&wid=835&crop=2025,994,835,1213"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Wedding Gift List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Create your wedding gift list online and collaborate with your partner, then share with family and friends to reserve items
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://www.sweetimpressions.ca/site-content/uploads/2022/03/GoDaddyStudioPage-0-93-1000x800-c-center.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Baby Shower List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Get the essentials on your baby shower list to prepare for your new arrival, guests an tick off what they'll bring
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-housewarming-gifts-1639176220.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                House Warming List
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Prepare for your new home with a list of home essentials, then share with guests who can tick off what they will bring.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.ctfassets.net/3s5io6mnxfqz/2JJ0Ii1UBYjOKkNueN22QZ/28f371af458eef198b7d94e270606d04/AdobeStock_276253290.jpeg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Anything Else
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Things To Get Me can be used to manage any list, from to-do lists, bucket-lists, planning a BBQ, cocktail parties, or grocery shopping.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
      <section >
        <div className="footer">
          <div className="icon1">
            <img className="icon" src={blackFont} />
          </div>
          <div className="contact">
            <p className="terms">Terms & Conditions</p>
            <p>Contact</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
