import React from "react";
import home1 from "../img/home1.png";
//styled
import styled from "styled-components";
import { About, StyledHide, StyledDescription, StyledImage } from "../styles";

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

export default AboutSection;
