/*
 *
 * ShoppingCardsRenderer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import ShoppingCard from '../ShoppingCard'

export class ShoppingCardsRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderItems(items) {
    return items.map(item => <ShoppingCard key={item.id} item={item} />)
  }

  render() {
    const { items } = this.props
    return (
      <div className="row-container">
        {this.renderItems(items)}
      </div>
    );
  }
}

ShoppingCardsRenderer.propTypes = {};

function mapStateToProps(state) {
  const { ShoppingCardsReducer } = state.toJS();
  return {
    items: ShoppingCardsReducer
  }
}

export default connect(mapStateToProps)(ShoppingCardsRenderer);
