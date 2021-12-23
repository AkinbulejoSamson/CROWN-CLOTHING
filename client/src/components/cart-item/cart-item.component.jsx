import React from "react";

import {
  CartItemContainer,
  CartItemImage,
  ItemDetailsContainer,
  ItemDetails
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <ItemDetails>{name}</ItemDetails>
      <ItemDetails>{quantity} x ${price}</ItemDetails>
    </ItemDetailsContainer>
  </CartItemContainer>
)

export default React.memo(CartItem);
