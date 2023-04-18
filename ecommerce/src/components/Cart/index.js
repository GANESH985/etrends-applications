import Header from '../Header'
import CartImage from '../trendz-cart-img.png'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <img src={CartImage} alt="cart" className="cart-img" />
      <h1 className="cart-heading">Cart</h1>
    </div>
  </>
)

export default Cart
