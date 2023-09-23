import React from 'react'
import heroStyles from '../styles/hero.module.css'

export const Hero = () => {
  return (
    <div className={heroStyles.heroContainer}>
      <h1 className={heroStyles.title}>PseudoShop</h1>
      <h2 className={heroStyles.subTitle}>Your one stop shop for clothing, tech, and more</h2>
    </div>
  )
}

export default {Hero}