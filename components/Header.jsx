import Image from 'next/image';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
import photo from './alex.jpeg';

const NavItem = ({ icon, text, link }) => {
  return (
    <li className="nav-link">
      <Link to={link} activeClass="active-link" spy={true} smooth={true} duration={100}>
        <i className={`bx ${icon}`}></i>
        <span className="text nav-text">{text}</span>
      </Link>
    </li>
  );
};

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => setShowMenu(!showMenu);

  return (
    <Container showMenu={showMenu}>
      <ContainerImage>
        <div className="image-text">
          <span className="image">
            <Image src={photo} alt="Alex" width={40} height={40} />
          </span>

          <div className="text logo-text">
            <span className="name">Alexandra ST VIL</span>
            <span className="profession">Développeuse Web</span>
          </div>
        </div>

        <i onClick={handleMenu} className="bx bx-chevron-right" />
      </ContainerImage>

      <div className="menu-bar">
        <Menu showMenu={showMenu}>
          <ul className="menu-links">
            <NavItem icon={'bxs-home'} text={'Accueil'} link="home" />
            <NavItem icon={'bxs-user'} text={'À propos'} link="about" />
            <NavItem icon={'bxs-bar-chart-alt-2'} text={'BTS SIO'} link="bts" />
            <NavItem icon={'bx-spreadsheet'} text={'Compétences'} link="skills" />
            <NavItem icon={'bxs-graduation'} text={'Parcours'} link="cursus" />
            <NavItem icon={'bxs-briefcase'} text={'Projets'} link="project" />
            <NavItem icon={'bxs-server'} text={'Veille'} link="veille" />
            <NavItem icon={'bxs-chat'} text={'Contact'} link="contact" />
          </ul>
        </Menu>
      </div>
    </Container>
  );
};

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  // width: 250px;
  ${({ showMenu }) =>
    showMenu &&
    css`
      width: 250px;
    `};
  ${({ showMenu }) =>
    !showMenu &&
    css`
      width: 80px;
    `};
  padding: 10px 14px;
  background: var(--container-color);
  transition: var(--tran-05);
  z-index: 100;

  .sidebar.close {
    width: 88px;
  }

  header {
    position: relative;
  }

  li {
    height: 50px;
    list-style: none;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }

  img,
  i {
    min-width: 60px;
    border-radius: 6px;
  }
  i {
    min-width: 60px;
    border-radius: 6px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }

  span,
  i {
    color: whitesmoke;
    transition: var(--tran-03);
  }

  span {
    font-size: var(--normal-font-size);
    font-weight: 500;
    white-space: nowrap;
    ${({ showMenu }) =>
      showMenu &&
      css`
        opacity: 1;
      `};
    ${({ showMenu }) =>
      !showMenu &&
      css`
        opacity: 0;
      `};
  }
  .image {
    opacity: 1;

    img {
      object-fit: cover;
      object-position: top 20px;
    }
  }
`;

const ContainerImage = styled.header`
  position: relative;

  div:first-child {
    display: flex;
    align-items: center;

    span:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      // Name
      span:first-child {
        margin-top: 2px;
        font-size: var(--normal-font-size);
        font-weight: 600;
      }
      // Profession
      span:last-child {
        font-size: var(--small-font-size);
        margin-top: -2px;
        display: block;
      }
    }
  }
  // icon
  i {
    position: absolute;
    top: 50%;
    right: -25px;
    transform: translateY(-50%) rotate(0deg);
    height: 25px;
    min-width: auto;
    width: 25px;
    background-color: #695cfe;
    color: whitesmoke;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    cursor: pointer;
    transition: var(--tran-05);
  }
`;

const Menu = styled.div`
  margin-top: 40px;

  a {
    list-style: none;
    height: 100%;
    background-color: transparent;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
    border-radius: 6px;
    text-decoration: none;
    transition: var(--tran-03);

    &:hover {
      background-color: var(--first-color);

      & span,
      & i {
        color: #fcfcfcbb;
      }
    }
  }
`;

export default Header;
