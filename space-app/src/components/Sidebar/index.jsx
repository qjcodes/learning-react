import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StylizedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <StylizedList>
          <NavigationItem
            activeIcon="icons/active-home.png"
            InactiveIcon="icons/inactive-home.png"
            active
          >
            Inicio
          </NavigationItem>
          <NavigationItem
            activeIcon="icons/most-viewed-active.png"
            InactiveIcon="icons/most-viewed-inactive.png"
          >
            Más vistas
          </NavigationItem>
          <NavigationItem
            activeIcon="icons/active-like.png"
            InactiveIcon="icons/inactive-like.png"
          >
            Más Me Gusta
          </NavigationItem>
          <NavigationItem
            activeIcon="icons/new-active.png"
            InactiveIcon="icons/new-inactive.png"
          >
            Nuevas
          </NavigationItem>
          <NavigationItem
            activeIcon="icons/suggest-active.png"
            InactiveIcon="icons/suggest-inactive.png"
          >
            Sorpréndame
          </NavigationItem>
        </StylizedList>
      </nav>
    </aside>
  );
};

export default Sidebar;
