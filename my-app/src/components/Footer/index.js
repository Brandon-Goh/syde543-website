import React from "react";

import { Wrapper, Content } from "./footer.syle";

const Footer = ({ bottom }) => {
  return (
    <Wrapper>
      <Content className={bottom}>
        <div>
          <a
            href="https://github.com/Brandon-Goh/syde543-website"
            target="_blank"
            rel="noreferrer"
          >
            Fire Optics &copy; 2024
          </a>
        </div>
        <div></div>
      </Content>
    </Wrapper>
  );
};

export default Footer;
