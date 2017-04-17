/*
 *
 * BasketCard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions'

import Prices from '../../components/Prices'

export class BasketCard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleItemDeletion(key) {
    this.props.deleteItem(key)
  }

  render() {
    const { key, title, image, originalPrice, discountedPrice, isDiscount } = this.props.item;
    return (
      <a key={key} href="#">
        <div className="row">
          <img src={image} alt="Avatar" />
          {title}
        </div>
        <div className="row">
          <Prices originalPrice={originalPrice}
                  discountedPrice={discountedPrice}
                  isDiscount={isDiscount} />
        </div>
        <div className="row">
          <div className="delete-btn" onClick={this.handleItemDeletion.bind(this, key)}>
            <div>Delete from Chart</div>
          </div>
        </div>
        <hr />
      </a>
    );
  }
}

BasketCard.propTypes = {};

export default connect(null, actions)(BasketCard);
