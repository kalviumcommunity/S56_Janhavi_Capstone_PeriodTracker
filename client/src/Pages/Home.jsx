import React from 'react'
import Navbar from '../Components/Navbar'
import "../Pages/home.css"
import image from "../assets/image.webp"
import aboutbg from "../assets/aboutbg.png";
import blood from "../assets/blood.png";
import chocolate from "../assets/chocolate.png";
import pad from "../assets/pad.png";

function Home() {
  return (
    <>
      <Navbar/>
      <div className="header">
          <div className="image"><img src={image} width={830}/></div>
          <div className="slogan">
          <p>Sync Your Cycle, Explore Your World</p> 
          <p>Ms. Femmigo Guides Your Journey!</p>
          <button>Login</button>
          </div>
      </div>
      <div className="aboutus">
        <img src={aboutbg} width={1473} />
        <div className="text">
          <p>The website is a special tool made just for women. It helps them keep track of their menstrual cycle. The website also helps women plan their trips and decide where to go based on which part of their menstrual cycle they're in. Women can enjoy their travels more and feel comfortable throughout. The tracker part of the website is like a calendar that remembers each woman's cycle, so they don't have to. It sends reminders before important phases start, making it easier to plan. </p>
        </div>
      </div>
      <div className="cards">
        <div className="symptoms">
          <h1>Period Symptoms</h1>
          <img src={blood} width={200} />
          <div className="symlist">
          <p> 1.Menstrual Cramps </p>
          <p> 2.Bloating </p>
          <p> 3.Mood Swings </p>
          <p> 4.Fatigue </p>
          <p> 5.Headaches </p>
          <p> 6.Breast Tenderness </p>
          <p> 7.Acne </p>
          <p> 8.Food Cravings </p>
          <p> 9.Back Pain </p>
          <p> 10.Nausea </p>  
          </div>
            <button className='learnMoresym'>Learn More</button>
        </div>
        <div className="cravings">
        <h1>Period Cravings</h1>
        <img src={chocolate} width={200} />
          <div className="cravlist">
          <p> 1.Chocolate </p>
          <p> 2.Salty snacks </p>
          <p> 3.Carbohydrates </p>
          <p> 4.Sweets </p>
          <p> 5.Fatty foods </p>
          <p> 6.Dairy products </p>
          <p> 7.Spicy foods </p>
          <p> 8.Ice cream </p>
          <p> 9.Pizza </p>
          <p> 10.Cookies </p>
          </div>
            <button className='learnMorecrav'>Learn More</button>
        </div>
        <div className="disorders">
        <h1>Period Disorders</h1>
        <img src={pad} width={200}/>
          <div className="dislist">
            <p> 1.Dysmenorrhea </p>
            <p> 2.Amenorrhea </p>
            <p> 3.Menorrhagia </p>
            <p> 4.Premenstrual Syndrome (PMS) </p>
            <p> 5.Premenstrual Dysphoric Disorder (PMDD) </p>
            <p> 6.Polycystic Ovary Syndrome (PCOS) </p>
            <p> 7.Endometriosis </p>
            <p> 8.Fibroids </p>
            <p> 9.Irregular Menstrual Cycles </p>
          </div>
            <button className='learnMoredis'>Learn More</button>
        </div>
      </div>
      <div className="footer">
        <p>Made By Janhavi ❤️</p>
      </div>
   
    </>
  )
}

export default Home