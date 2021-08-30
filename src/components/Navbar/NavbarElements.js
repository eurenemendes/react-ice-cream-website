import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import {FaIceCream} from 'react-icons/fa';

export const Nav = styled.nav`
    background: linear-gradient(90deg, rgba(180,60,34,1) 0%, rgba(253,88,29,1) 50%, rgba(252,194,69,1) 100%);
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  &:hover {
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }

  &:hover {
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #000;
    }
`;

export const Bars = styled(FaIceCream)`
font-size: 2rem;
transform: translate(-50%, -15%);
`;

