import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  ItemImage,
  AddButton,
  CollectionFooterContainer,
  ItemName,
  ItemPrice,
} from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <ItemImage className='image' imageUrl={imageUrl} key={id} />
      <CollectionFooterContainer>
        <ItemName>{name}</ItemName>
        <ItemPrice>${price}</ItemPrice>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>Add to cart</AddButton>
    </CollectionItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);