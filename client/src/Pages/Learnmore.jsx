import React from 'react'
import Navbar from '../Components/Navbar'
import symptoms from '../assets/symptoms.jpg'
import craving from '../assets/craving.webp'
import diseases from '../assets/diseases.jpg'
import phases from '../assets/phases.jpg'
import './learnmore.css'

function Learnmore() {
  return (
    <div>
        <Navbar/>
        <div className="intro">
            <h1>Introduction 👋🏼</h1>
            <p>Understanding the menstrual cycle involves recognizing not just the physiological changes but also the emotional and dietary aspects that women may experience. Here's a comprehensive guide covering period symptoms, cravings, common disorders, and the four menstrual phases.</p>
        </div>
        <hr />
        <div className="symptomss">
            <div className="symimage"><img src={symptoms} alt="symptomsImage" /></div>
            <div className="symtext">
                <h1>Period Symptoms 😔</h1>
                <p>1. Menstrual Cramps: Pain and discomfort in the lower abdomen are common during menstruation.</p>
                <p>2. Bloating: A feeling of fullness and swelling in the abdomen.</p>
                <p>3. Mood Swings: Emotional fluctuations ranging from irritability to sadness.</p>
                <p>4. Fatigue: Increased tiredness and lethargy.</p>
                <p>5. Headaches: Mild to severe headaches often accompany periods.</p>
                <p>6. Breast Tenderness: Sensitivity and soreness in the breasts.</p>
                <p>7. Acne: Skin breakouts due to hormonal changes.</p>
                <p>8. Food Cravings: Strong desires for specific foods, often related to hormonal fluctuations.</p>
                <p>9. Back Pain: Aches and discomfort in the lower back region.</p>
                <p>10. Nausea: Feeling queasy or nauseous, especially during the early stages of menstruation.</p>
            </div>
        </div>
        <hr />
        <div className="cravingss">
            <div className="cravtext">
            <h1>Period Cravings 🍫</h1>   
                <p>1. Chocolate: Commonly craved for its mood-boosting properties.</p>
                <p>2. Salty Snacks: Chips, pretzels, or nuts are often desired.</p>
                <p>3. Carbohydrates: Bread, pasta, and rice are comforting choices.</p>
                <p>4. Sweets: Candies, pastries, or desserts are popular cravings.</p>
                <p>5. Fatty Foods: Foods like burgers, fries, or fried snacks may be craved.</p>
                <p>6. Dairy Products: Cheese, ice cream, or yogurt are common cravings.</p>
                <p>7. Spicy Foods: Some crave spicy dishes during menstruation.</p>
                <p>8. Ice Cream: A cool treat often sought for its soothing effect.</p>
                <p>9. Pizza: A combination of carbs, cheese, and savory toppings is appealing.</p>
                <p>10. Cookies: Sweet and satisfying, cookies are a frequent craving.</p>
                </div>
            <div className="cravimage"><img src={craving} alt="CravingImage" /></div>
        </div>
        <hr />
        <div className="diseasess">
            <div className="disimage"><img src={diseases} alt="DiseasesImage" /></div>
            <div className="distext">  
                <h1>Period Diseases/Disorders 😣</h1>
                <p>Dysmenorrhea: Painful periods with cramps and discomfort.</p>
                <p>Amenorrhea: Absence or irregularity of menstrual periods.</p>
                <p>Menorrhagia: Heavy or prolonged menstrual bleeding.</p>
                <p>Premenstrual Syndrome (PMS): Physical and emotional symptoms before menstruation.</p>
                <p>Premenstrual Dysphoric Disorder (PMDD): Severe form of PMS with intense mood changes.</p>
                <p>Polycystic Ovary Syndrome (PCOS): Hormonal disorder affecting ovulation and menstruation.</p>
                <p>Endometriosis: Tissue lining the uterus grows outside it, causing pain and fertility issues.</p>
                <p>Fibroids: Non-cancerous growths in the uterus that can lead to heavy periods.</p>
                <p>Irregular Menstrual Cycles: Variations in cycle length or frequency.</p>
            </div>
        </div>
        <hr />
        <div className="phases">
            <div className="phastext">
                <h1>Menstrual Phases ⏱️</h1>
                <p><b>Menstrual Phase (Days 1-7):</b></p>
                <p>Physical Symptoms: Menstrual cramps, bloating, fatigue, headaches.</p>
                <p>Emotional Symptoms: Mood swings, irritability, fatigue, sadness, increased sensitivity.</p>
                <p><b>Follicular Phase (Days 1-14, overlaps with Menstrual Phase):</b></p>
                <p>Physical Symptoms: Lighter bleeding or spotting, increased energy, decreased bloating.</p>
                <p>Emotional Symptoms: Improved mood, higher energy levels, increased motivation and productivity.</p>
                <p><b>Ovulation Phase (Around Day 14, mid-cycle):</b></p>
                <p>Physical Symptoms: Possible ovulation pain (mittelschmerz), cervical mucus changes.</p>
                <p>Emotional Symptoms: Heightened emotions, feeling more attractive.</p>
                <p><b>Luteal Phase (Days 15-28, after ovulation):</b></p>
                <p>Physical Symptoms: Bloating, acne, food cravings (especially for carbs and sweets).</p>
                <p>Emotional Symptoms: Mood swings, irritability, anxiety, increased sensitivity, PMS symptoms.</p>
            </div>
            <div className="phasimage"><img src={phases} alt="PhasesImage" /></div>
        </div>
        <hr />
        <div className="conclusion">
            <h1>Conclusion 👋🏼</h1>
            <p>It's important to note that not all women experience the same symptoms during each phase, and individual variations can occur based on factors like hormonal balance, overall health, and lifestyle. Tracking these phases can help individuals understand their bodies better and manage any associated symptoms more effectively.The menstrual cycle is a complex interplay of hormonal changes, physical symptoms, and emotional experiences. By understanding these aspects, individuals can better manage their menstrual health and well-being.</p>
        </div>
        <div className="footer">
            <h3>Made By Janhavi ❤️</h3>
        </div>
    </div>
  )
}

export default Learnmore