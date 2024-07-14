import { useContext, useRef } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";

const StylizedContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const StylizedTextField = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`;

const MagnifyingGlassIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px !important;
  height: 38px;
  object-fit: contain;
`;

const TextField = () => {
  const { dispatch } = useContext(GlobalContext);
  const queryBox = useRef(null);
  return (
    <StylizedContainer>
      <StylizedTextField
        ref={queryBox}
        type="text"
        placeholder="Que estas Buscando?"
        // onChange={(event) => setFilter(event.target.value)}
      />
      <MagnifyingGlassIcon
        src="img/search.png"
        alt="Icono de Lupa"
        onClick={() =>
          dispatch({
            type: "SET_FILTER",
            payload: queryBox.current.value,
          })
        }
      />
    </StylizedContainer>
  );
};

export default TextField;
