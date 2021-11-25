import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`

export const TitleContainer = styled.h1`
  cursor: pointer;
  font-size: 30px;
  margin-bottom: 1.5rem;

  &:hover {
    color: grey;
  }
`

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; 
`
