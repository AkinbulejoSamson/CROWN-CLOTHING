import styled from 'styled-components';

export const CartItemContainer = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  margin-bottom: 15px;
`

export const CartItemImage = styled.img`
  width: 30%;
`

export const ItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;
  font-family: 'Open Sans Condensed';
`

export const ItemDetails = styled.span`
  font-size: 1.1rem;
`