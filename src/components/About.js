import React from 'react'
import aboutStyles from '../styles/about.module.css'

export const About = () => {
  return (
    <>
    <div className={aboutStyles.about}>
      <h1 className={aboutStyles.title}>About PseudoShop</h1>
    </div>
    <div className={aboutStyles.desc}>
      <p className={aboutStyles.p1}>At PseudoShop, we believe in the power of choice. Our mission is to provide shoppers worldwide with an extensive range of high-quality clothing, electronics, and jewelry. We collaborate with various ports globally to ensure your orders are delivered promptly.</p>
      <p className={aboutStyles.p2}>Our products are carefully selected and quality tested, sourced from trusted manufacturers around the world. We are committed to offering our customers a seamless and enjoyable shopping experience.</p>
    </div>
    </>
  )
}

export default About

