import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import {Button, Typography} from '@material-ui/core'

const Cart  = ({ products, total, onCheckoutClicked }) => {
    const hasProducts = products.length > 0

    const nodes = hasProducts ? (
        products.map(product =>
        <Product
            image={product.image}
            title={product.title}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
        />
        )
    ) : (
        <em>No Items Added!</em>
    )

    return (
        <React.Fragment>
            <Typography variant="h6">Cart</Typography>
            <div>{nodes}</div>
        
            <p>Total: Rs. {total}</p>
        
            <Button variant="contained"
                color="primary"
                onClick={onCheckoutClicked}
                disabled={hasProducts ? false : true }>
                Checkout
            </Button>
        </React.Fragment>
    )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart