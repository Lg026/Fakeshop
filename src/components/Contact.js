import React from 'react'
import contactStyles from '../styles/contact.module.css'

export const Contact = () => {
  return (
    <>
    <div className={contactStyles.title}>
    <h1 className={contactStyles.questions}>Got any questions?</h1>
    </div>
    <div className={contactStyles.desc}>
    <h2 className={contactStyles.subTitle1}>Reach us here</h2>
    <p className={contactStyles.p}>Email: PseudoShop@fakemail.com</p>
    <p className={contactStyles.p}>Phone: (123-456-7890)</p>
    <h2 className={contactStyles.subTitle2}>Our headquarters</h2>
    <p className={contactStyles.p}>498 HQ street, Los Angeles, CA 9001</p>
    </div>
    </>
  )
}

export default Contact
