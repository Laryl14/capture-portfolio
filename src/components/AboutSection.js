import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About className="about">
      <StyledDescription className="description">
        <div className="title">
          <StyledHide className="hide">
            <h2>We work to Make</h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide className="hide">
            <h2>true.</h2>
          </StyledHide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage className="image">
        <img src={home1} alt="camera man" />
      </StyledImage>
    </About>
  );
};

//Styled Components - backticks / styled components look like components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescription = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImage = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover; //stretches back out and keeps aspect ratio
  }
`;

const StyledHide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
