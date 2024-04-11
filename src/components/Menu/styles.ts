import styled from "styled-components";
import { Link } from "react-router-dom";//navegar uma pagina a outra sem reaload

  interface INavbarContainer {
    extendNavbar: boolean;
  }

export const NavbarContainer = styled.nav<INavbarContainer>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
  background-color: var(--black);
  display: flex;
  flex-direction: column;

  @media (min-width: 700px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  /* padding-left: 5%; */
`;

export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const NavbarLink = styled(Link)`
  /* color: var(--white); */
  color: #ccc;
  font-size: large;
  text-decoration: none;
  margin: 10px;

  :hover {
    color: var(--white);
  }

  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavbarLinkExtended = styled(Link)`
  color: #ccc;
  font-size: large;
  text-decoration: none;
  margin: 10px;

  :hover {
    color: var(--white);
  }
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: #ccc;
  font-size: 45px;
  cursor: pointer;

  :hover {
    color: var(--white);
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    display: none;
  }
`;
