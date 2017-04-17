/**
 *
 * Prices
 *
 */

import React from 'react';

class Prices extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { originalPrice, discountedPrice, isDiscount } = this.props;
    if (isDiscount) {
      return (
        <p className="card-text-container card-price">
          <span className="line-through-price">{originalPrice}€</span>
          <span className="discounted-price">  {discountedPrice}€ </span>
        </p>)
    }
    else {
      return (
        <p className="card-text-container card-price">
          <span>{originalPrice}€</span>
        </p>)
    }
  }
}
Prices.propTypes = {};

export default Prices;
