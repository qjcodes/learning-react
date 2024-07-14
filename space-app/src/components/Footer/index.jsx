import styled from "styled-components";

const StylizedFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 100px;
  background-color: #04244f;
  padding: 22px;
  box-sizing: border-box;
`;

const IconContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    display: inline-block;
    margin-right: 3px;
    a {
      img {
        width: 32px !important;
      }
    }
  }
`;

const FooterText = styled.p`
  font-size: 16px;
  color: #fff;
  margin: 0;
`;

const Footer = () => {
  return (
    <StylizedFooter>
      <IconContainer>
        <li>
          <a href="#">
            <img src="/img/networks/facebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/img/networks/twitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="/img/networks/instagram.svg" alt="" />
          </a>
        </li>
      </IconContainer>
      <FooterText>Desarrollado por F Code</FooterText>
    </StylizedFooter>
  );
};

export default Footer;
