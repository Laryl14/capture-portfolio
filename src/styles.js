//Page Styles - Layout Styling
import styled from "styled-components";

export const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5rem 10rem;
  color: white;
`;

export const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

export const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover; //stretches back out and keeps aspect ratio
  }
`;

export const StyledHide = styled.div`
  overflow: hidden;
`;
