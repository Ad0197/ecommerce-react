import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector} from 'reselect'

//asset
import { ReactComponent as ShopCart } from "../../assets/card.svg";

import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


import "./card-icon.styles.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShopCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
});
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
