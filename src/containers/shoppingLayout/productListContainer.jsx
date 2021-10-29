import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addToCart, removeFromCart } from '../../actions'
import { getCartProducts, getTotal, getAddedIds } from '../../reducers'
import { getVisibleProducts } from '../../reducers/productsList'
import ScannerPage from '../../components/scannerPage';

const ProductsScanContainer = ({addToCart, removeFromCart}) => (
  
  <ScannerPage addToCart={addToCart} removeFromCart={removeFromCart}/>

)

ProductsScanContainer.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  total: PropTypes.string
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products),
  cartProducts: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { addToCart, removeFromCart }
)(ProductsScanContainer)