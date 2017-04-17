/*
 *
 * BasketCardsRenderer
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import BasketCard from '../BasketCard'

export class BasketCardsRenderer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderItems(items) {
    return Object.keys(items).map((key) => {
      const { id } = items[key];
      if (id)
        return ( <BasketCard key={key} item={items[key]} /> );
      if (Object.keys(items).length == 0)
        return (<a key={key} href="#">Basket is Empty
          <hr />
        </a>)
    })

  }

  render() {
    const cartImage = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIycHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDIyIDE4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCAzLjguMyAoMjk4MDIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPkZpbGwgMzQ0NSArIEZpbGwgMzQ0NiArIEZpbGwgMzQ0NzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJEZXNrdG9wLUhEIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3OC4wMDAwMDAsIC0zMi4wMDAwMDApIiBmaWxsPSIjMEEwQjA5Ij4KICAgICAgICAgICAgPGcgaWQ9IkNhcnQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk3MC4wMDAwMDAsIDE5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9IkZpbGwtMzQ0NS0rLUZpbGwtMzQ0Ni0rLUZpbGwtMzQ0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDA4LjAwMDAwMCwgMTMuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE4LjU1NSwxMi4zNCBMNy41NTUsMTIuMzQgQzcuMzQ5LDEyLjM0IDcuMTYzLDEyLjIxIDcuMDg5LDEyLjAyIEwyLjkzNiwxLjM0MSBMMSwxLjM0MSBMMSwyLjM0MSBDMSwyLjYyIDAuNzc2LDIuODQxIDAuNSwyLjg0MSBDMC4yMjQsMi44NDEgMCwyLjYyIDAsMi4zNDEgTDAsMC44NDEgQzAsMC41NiAwLjIyNCwwLjM0IDAuNSwwLjM0IEwzLjI3NywwLjM0IEMzLjQ4MywwLjM0IDMuNjY5LDAuNDcgMy43NDMsMC42NjEgTDcuODk2LDExLjM0MSBMMTguMjEsMTEuMzQxIEwyMC41Myw1LjI1IEw2Ljc5MSwzLjM0IEM2LjUxOCwzLjMwMSA2LjMyNywzLjA0MSA2LjM2NSwyLjc3MSBDNi40MDMsMi41IDYuNjU4LDIuMzIgNi45MywyLjM1MSBMMjEuMjksNC4zNTEgQzIxLjQ0LDQuMzcgMjEuNTczLDQuNDUgMjEuNjUxLDQuNTkxIEMyMS43MjksNC43MiAyMS43NDIsNC44ODEgMjEuNjg4LDUuMDIxIEwxOS4wMjEsMTIuMDIgQzE4Ljk0OCwxMi4yMSAxOC43NjIsMTIuMzQgMTguNTU1LDEyLjM0IiBpZD0iRmlsbC0zNDQ1Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwLjE2NiwxMi45IEM4Ljk0LDEyLjkgNy45NDMsMTMuODkxIDcuOTQzLDE1LjEyMSBDNy45NDMsMTYuMzQxIDguOTQsMTcuMzQxIDEwLjE2NiwxNy4zNDEgQzExLjM5MSwxNy4zNDEgMTIuMzg3LDE2LjM0MSAxMi4zODcsMTUuMTIxIEMxMi4zODcsMTMuODkxIDExLjM5MSwxMi45IDEwLjE2NiwxMi45IEwxMC4xNjYsMTIuOSBaIE0xMC4xNjYsMTMuOSBDMTAuODQsMTMuOSAxMS4zODcsMTQuNDQgMTEuMzg3LDE1LjEyMSBDMTEuMzg3LDE1Ljc5MSAxMC44NCwxNi4zNDEgMTAuMTY2LDE2LjM0MSBDOS40OSwxNi4zNDEgOC45NDMsMTUuNzkxIDguOTQzLDE1LjEyMSBDOC45NDMsMTQuNDQgOS40OSwxMy45IDEwLjE2NiwxMy45IEwxMC4xNjYsMTMuOSBaIiBpZD0iRmlsbC0zNDQ2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE1Ljk0MywxMi45IEMxNC43MTgsMTIuOSAxMy43MjEsMTMuODkxIDEzLjcyMSwxNS4xMjEgQzEzLjcyMSwxNi4zNDEgMTQuNzE4LDE3LjM0MSAxNS45NDMsMTcuMzQxIEMxNy4xNjksMTcuMzQxIDE4LjE2NiwxNi4zNDEgMTguMTY2LDE1LjEyMSBDMTguMTY2LDEzLjg5MSAxNy4xNjksMTIuOSAxNS45NDMsMTIuOSBMMTUuOTQzLDEyLjkgWiBNMTUuOTQzLDEzLjkgQzE2LjYxNywxMy45IDE3LjE2NiwxNC40NCAxNy4xNjYsMTUuMTIxIEMxNy4xNjYsMTUuNzkxIDE2LjYxNywxNi4zNDEgMTUuOTQzLDE2LjM0MSBDMTUuMjY4LDE2LjM0MSAxNC43MjEsMTUuNzkxIDE0LjcyMSwxNS4xMjEgQzE0LjcyMSwxNC40NCAxNS4yNjgsMTMuOSAxNS45NDMsMTMuOSBMMTUuOTQzLDEzLjkgWiIgaWQ9IkZpbGwtMzQ0NyI+PC9wYXRoPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4='
    const { items } = this.props;
    return (
      <div className="dropdown">
        <button className="dropbtn">
          <img src={cartImage} />
          <span className="primary-badge">{Object.keys(items).length }</span>
        </button>
        <div className="dropdown-content">
          {this.renderItems(items)}
        </div>
      </div>
    );
  }
}

BasketCardsRenderer.propTypes = {};

function mapStateToProps(state) {
  const { BasketCardsReducer } = state.toJS();
  console.log(BasketCardsReducer)
  return { items: BasketCardsReducer }
}

export default connect(mapStateToProps)(BasketCardsRenderer);
