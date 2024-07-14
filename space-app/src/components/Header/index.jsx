import styled from "styled-components";
import TextField from "../TextField";

const StylizedHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
`;

const Header = ({ filter, setFilter }) => {
  return (
    <StylizedHeader>
      <img src="img/logo.png" alt="Logo de Space App" />
      <TextField setFilter={setFilter}/>
    </StylizedHeader>
  );
};

export default Header;
