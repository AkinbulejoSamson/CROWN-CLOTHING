import styled,{css} from "styled-components";

const Width = css`
  width: 23%
`

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 1rem 0;
  font-size: 1.1rem;
`

export const ImageContainer = styled.div`
  ${Width};
  padding-right: 1rem;
`

export const ItemImage = styled.img`
  width:100%;
  height: 100%
`

export const ItemName = styled.span`
  ${Width}
`

export const ItemQuantity = styled.span`
  ${Width};
  display: flex;
`

export const ItemPrice = styled.span`
  ${Width};
  padding-left: .2rem;
`

export const Arrow = styled.div`
  cursor: pointer;
`

export const ItemValue = styled.span`
  margin: 0 10px;
`

export const RemoveButton = styled.div`
  padding-left: .8rem;
  cursor:pointer;
`
