import React, {useContext, useState,  useEffect } from 'react'
import { AppContext } from './ProductContext'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import productStyles from '../styles/products.module.css'

export const Products = () => {

    const {products, cart, updateCart, subtractCart, clearCart} = useContext(AppContext)
    const [category, setCategory] = useState("men's clothing");
    const [openModal, setOpenModal] = useState(false)
    const [itemDesc, setItemDesc] = useState([])
    const filteredProducts = products.filter((item) => item.category === category)

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

console.log(cart)


  return (
    <>

  <ul className={productStyles.nav}>
    <li><Link onClick={() => setCategory("men's clothing")} className={category === "men's clothing" ? productStyles.active : productStyles.a}>Men's</Link></li>
    <li><Link onClick={() => setCategory('jewelery')} className={category === 'jewelery' ? productStyles.active : productStyles.a}>Jewelry</Link></li>
    <li><Link onClick={() => setCategory('electronics')} className={category === 'electronics' ? productStyles.active : productStyles.a}>Electronics</Link></li>
    <li><Link onClick={() => setCategory("women's clothing")} className={category === "women's clothing" ? productStyles.active : productStyles.a}>Women's</Link></li>
  </ul>

      <div className={productStyles.grid}>
        {filteredProducts.map(product => (
        <article className={productStyles.card}>
          {cart.find(item => item.id === product.id) && <span className={productStyles.checkmark}>✔️</span>}
          <img onClick={() => {setItemDesc(product); setOpenModal(true)}} className={productStyles.img} src={product.image} alt={product.title}></img>
          <h2 className={productStyles.title}>{product.title}</h2>
          <h3 className={productStyles.price}>{`$${product.price.toFixed(2)}`}</h3>
          <button onClick={() => updateCart(product)} className={productStyles.btn}>Add to cart</button>
        </article>
        ))}
      </div>
      <Modal className={productStyles.modal} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.75)', },}} isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
            <button className={productStyles.modalbtn} onClick={() => setOpenModal(false)}>x</button>
            <h2 className={productStyles.modalTitle}>{itemDesc.title}</h2>
            <p className={productStyles.modalDesc}>{itemDesc.description}</p>
    </Modal>
    </>
  )
}

export default Products