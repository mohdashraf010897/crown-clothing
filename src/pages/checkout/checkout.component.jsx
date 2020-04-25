import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/cart/cart.selectors";

import CheckoutItem from "./../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "./../../components/stripe-button/stripe-button.commponent";

import {
  CheckoutContainer,
  CheckoutHeaderContainer,
  TotalContainer,
  TestWarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutContainer>
    <CheckoutHeaderContainer>
      <div>
        <span>Product</span>
      </div>
      <div>
        <span>Description</span>
      </div>
      <div>
        <span>Quantity</span>
      </div>
      <div>
        <span>Price</span>
      </div>
      <div>
        <span>Remove</span>
      </div>
    </CheckoutHeaderContainer>

    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <TotalContainer>
      <span>Total : ${total}</span>
    </TotalContainer>
    <TestWarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp : 01/20- CVV: 123
    </TestWarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
