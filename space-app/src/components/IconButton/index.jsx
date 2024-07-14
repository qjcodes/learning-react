import styled from "styled-components";

const IconButton = styled.button`
  box-sizing: border-box;
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  img {
    width: 24px !important;
    height: 24px !important;
  }
`;
export default IconButton;
