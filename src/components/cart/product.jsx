import React from 'react'
import PropTypes from 'prop-types'
import { CardContent } from '@material-ui/core'
import { Card, Typography } from '@material-ui/core'

const Product = ({ price, quantity, title, image }) => (
  <div>
    <Card>
      <CardContent style={{display: `flex`, alignItems: `center`}}>
        <img src={image} height="100" width="100" style={{marginRight: `20px`}}/>
        <div style={{display: `flex`, flexDirection: `column`}}>
          <Typography variant="h6">
            {title}
          </Typography>
          <Typography variant="body1">
            &#8377; {price}
          </Typography>
          <Typography variant="body1">
            Quantity: {quantity} 
          </Typography>
        </div>
      </CardContent>
    </Card>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
  image: PropTypes.string
}

export default Product