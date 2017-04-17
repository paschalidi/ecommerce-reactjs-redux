/*
 *
 * ShoppingCard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'

import Prices from '../../components/Prices'

export class ShoppingCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleItemAddition() {
    this.props.addItem(this.props.item)
  }

  renderBadges(isDiscount, isNew) {
    if (isDiscount && !isNew)
      return (
        <span className="badge-container secondary-badge"> SALE </span>
      )
    else if (!isDiscount && isNew)
      return (
        <span className="badge-container secondary-badge"> NEW </span>
      )
    else if (isDiscount && isNew)
      return (
        <span className="badge-container secondary-badge"> NEW </span>
      )
  }

  render() {
    const { title, image, originalPrice, discountedPrice, isDiscount, isNew } = this.props.item;
    return (
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card-container">
          <div className="card">
            <div className="card-responsive-container">
              <div className="card-img-container">
                <img src={image} alt="Avatar" />
                {this.renderBadges(isDiscount, isNew)}

                <div className="button" onClick={this.handleItemAddition.bind(this)}>
                  <span> Add to Cart </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card-details">
            <p className="card-text-container">{title}</p>
            <Prices originalPrice={originalPrice}
                    discountedPrice={discountedPrice}
                    isDiscount={isDiscount} />
          </div>
        </div>
      </div>
    );
  }
}

ShoppingCard.propTypes = {};

export default connect(null, actions)(ShoppingCard);
