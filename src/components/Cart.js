import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from './ProductContext';
import Modal from 'react-modal'
import cartStyles from '../styles/cart.module.css';

export const Cart = () => {
  const { cart, updateCart, subtractCart, clearCart } = useContext(AppContext);
  const [itemDesc, setItemDesc] = useState([])
  const [openModal, setOpenModal] = useState(false)

  const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
  const handleModal = (item) => {
    setItemDesc(item)
    setOpenModal(true)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className={cartStyles.cartGrid}>
      {cart.length > 0 && <h2 className={cartStyles.total}>Total: {`$${total.toFixed(2)}`}</h2>}


<div className={cartStyles.cartGrid}>
  {cart.length > 0 ? (
    cart.map((item) => (
      <article onClick={() => handleModal(item)} className={cartStyles.cartCard} key={item.id}>
        <button className={cartStyles.xBtn} onClick={() => clearCart(item.id)}>x</button>
        <img className={cartStyles.cartImg} src={item.image} alt={item.title} />
        <h2 className={cartStyles.cartTitle}>{item.title}</h2>
        <div className={cartStyles.btnContainer}>
          <button className={cartStyles.btns} onClick={() => subtractCart(item.id)}>-1</button>
          <p className={cartStyles.quantity}>{item.quantity}</p>
          <button className={cartStyles.btns} onClick={() => updateCart(item)}>+1</button>
        </div>
        <p className={cartStyles.subTotal}>{`$${item.price.toFixed(2)}`}</p>
      </article>
    ))
    
    
  ) : (
    <h2 className={cartStyles.emptyCart}>Cart Empty</h2>
  )}

</div>
      <Modal className={cartStyles.cartModal} style={{overlay: {backgroundColor: 'rgba(0, 0, 0, 0.75)', },}} isOpen={openModal} onRequestClose={() => setOpenModal(false)}>
            <button className={cartStyles.cartModalBtn} onClick={() => setOpenModal(false)}>x</button>
            <h2 className={cartStyles.cartModalTitle}>{itemDesc.title}</h2>
            <p className={cartStyles.cartModalDesc}>{itemDesc.description}</p>
    </Modal>
    </div>
    </>
  );
};

export default Cart;



