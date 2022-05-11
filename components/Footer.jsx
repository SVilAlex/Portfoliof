import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';
const Footer = () => {
  const socials = [{ icon: 'bxl-linkedin', link: 'https://linkedin.com' }];

  return (
    <Container>
      <Wrapper>
        <h1 className="text" to={'home'} activeClass="active-link" spy={true} smooth={true} duration={100}>
          Alexandre STVIL{' '}
        </h1>

        <Menu>
          <li>
            <a className="text" to={'about'} activeClass="active-link" spy={true} smooth={true} duration={100}>
              À propos
            </a>
          </li>
          <li>
            <a className="text" to={'skills'} activeClass="active-link" spy={true} smooth={true} duration={100}>
              Compétences
            </a>
          </li>
          <li>
            <a className="text" to={'projet'} activeClass="active-link" spy={true} smooth={true} duration={100}>
              Projets
            </a>
          </li>
        </Menu>

        <SocialMenu>
          {socials.map((social, index) => (
            <li key={index}>
              <Link href={social.link} passHref>
                <a className="background">
                  <i className={`bx ${social.icon}`}></i>
                </a>
              </Link>
            </li>
          ))}
        </SocialMenu>
        <span className="text copy">&#169; Waly. All rigths reserved</span>
      </Wrapper>
    </Container>
  );
};

const Container = styled.footer`
  background-color: var(--first-color);
`;

const Wrapper = styled.div`
  padding: 2rem 0rem 6rem;
  h1,
  a {
    color: var(--body-color);
  }
  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }
  span {
    display: block;
    margin-top: 4.5rem;
    color: var(--container-color);
    text-align: center;
    font-size: var(--smaller-font-size);
    a {
      color: var(--title-color);
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialMenu = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;
  a {
    display: inline-flex;
    padding: 0.25rem;
    color: var(--first-color);
    background-color: var(--body-color);
    border-radius: 0.25rem;
    font-size: 1rem;
  }
`;

export default Footer;
