import React from "react";
import { connect } from "react-redux";

import { clearItemFromCart, addItem, removeItem } from "../../redux/cart/cart.actions";

import {
  CheckoutContainer,
  ImageContainer,
  ItemImage,
  ItemName,
  ItemQuantity,
  ItemPrice,
  Arrow,
  ItemValue,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem}) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CheckoutContainer>
      <ImageContainer>
        <ItemImage src={imageUrl} alt="item" />
      </ImageContainer>
      <ItemName>{name}</ItemName>
      <ItemQuantity>
        <Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
        <ItemValue>{quantity}</ItemValue> 
        <Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
      </ItemQuantity>
      <ItemPrice>${price}</ItemPrice>
      <RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
    </CheckoutContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);