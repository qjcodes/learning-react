import styled from "styled-components";

const StylizedListItem = styled.li`
  font-size: 24px;
  margin-bottom: 30px;
  line-height: 28px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: ${(props) => (props.$active ? "#7b78e5" : "#d9d9d9")};
  font-family: ${(props) =>
    props.$active ? "GandhiSansBold" : "GandhiSansRegular"};

  img {
    height: 32px;
    width: 32px !important;
  }
`;

const NavigationItem = ({
  children,
  activeIcon,
  InactiveIcon,
  active = false,
}) => {
  return (
    <StylizedListItem $active={active}>
      <img src={active ? activeIcon : InactiveIcon} alt="Icono" />
      {children}
    </StylizedListItem>
  );
};

export default NavigationItem;
