import styled from "styled-components";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'

export const CartIconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

export const CartShoppingIcon = styled(ShoppingIcon)`
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: .7rem;
`

export const ItemCount = styled.span`
  position: absolute;
  font-size: .9rem;
  font-weight: bold;
  bottom: 1.1rem;
`