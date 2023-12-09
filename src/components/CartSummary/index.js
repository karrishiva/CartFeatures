// Write your code here

import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      let total = 0

      cartList.forEach(element => {
        total += element.quantity * element.price
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total">
              Order Total: <span className="total-amount">{total}</span>
            </h1>
            <p className="items-in-cart">{cartList.length} Items in cart</p>
            <button type="button" className="check-out-btn">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
