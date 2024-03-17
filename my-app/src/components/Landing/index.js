import React from "react";

import { Wrapper, Content } from "./models.style";

import Section from "../Section";
import Interior from "../Interior_Specs";
import Subtitle from "../Subtitle";
import Specs from "../Gen_Spec";
import Header from "../Header";
import Footer from "../Footer";

const Landing = () => {
  document.title = "CareerGPT";
  return (
    <Wrapper>
      <Header />
      <Content>
        <Section
          title="CareerGPT"
          desc="Provides tailored advice and resources to help users navigate their career paths with confidence and clarity"
          backgroundImg="landing-full.jpg"
          arrow="true"
          battery="6"
          compute="4.50"
          fov="55° x 35°"
          refresh="32"
          distance="250"
        />
      </Content>
      <Content>
        <Subtitle />
        <Specs />
      </Content>
      <Content>
        <Interior />
      </Content>
      <Footer bottom="bottom" />
    </Wrapper>
  );
};

export default Landing;
