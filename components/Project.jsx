import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import img from "./alex.jpeg";
import SliderPresentation from "./SliderPresentation";

/*eslint-disable react/no-unescaped-entities*/

const Project = () => {
  const download = (e, file, name) => {
    e.preventDefault();
    saveAs(file, name);
  };

  return (
    <Container id="project">
      <h2>Mes projets</h2>

      <SliderPresentation>
        <SwiperSlide>
          <div>
            <em>Projet en collaboration</em>
            <div
              style={{ width: "250px", height: "180px", overflow: "hidden" }}
            >
              <img
                src="https://cdn.sanity.io/images/p74w8ujr/production/190826b3eb7bd85a000bd1bb0e6d77a6b0326b31-640x420.jpg"
                alt=""
              />
            </div>
            <p>
              Projet réalisé en collaboration avec un élève en BTS SIO SISR.
              Lors de ce projet on devrait faire une documantation sur
              l'installation de Centreon Si vous voulez en savoir plus sur cette
              documentation, vous pouvez la télécharcher.
            </p>
            <button>
              {" "}
              <a
                onClick={(e) =>
                  download(e, "assets/documentation.pdf", "documentation")
                }
              >
                télécharger
              </a>{" "}
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <em>Mini réseau social</em>
            <div
              style={{ width: "250px", height: "180px", overflow: "hidden" }}
            >
              <img src="assets/Raccount Network.png" alt="social" />
            </div>
            <p>
              Le projet que j’ai réalisé est un mini réseau social sur le thème
              du voyage qui permet aux utilisateurs de partager leurs
              expériences sur des lieux qu'ils ont visités en Vacances.
            </p>
            <button>
              {" "}
              <Link href={""} passHref target="_blank">
                Voir plus
              </Link>{" "}
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <em>Application</em>
            <div
              style={{ width: "250px", height: "180px", overflow: "hidden" }}
            >
              <img src="assets/React Movies.png" alt="Movies" />
            </div>
            <p>
              Le projet réaliser c’est une application d’affichage des films
              pour donner envie aux utilisateurs de regarder un film soit chez
              eux ou au cinéma. Une fois le visiteur arrive sur l’application il
              doit s’inscrire et se connecter pour devenir un utilisateur.
            </p>
            <button>
              {" "}
              <Link
                href={" https://svilalex.github.io/cinema/"}
                passHref
                target="_blank"
              >
                Voir plus
              </Link>{" "}
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <em>Biographie de Rihanna</em>
            <div
              style={{ width: "250px", height: "180px", overflow: "hidden" }}
            >
              <img src="assets/Biographie.png" alt="Rihanna" />
            </div>
            <p>
              Projet réaliser en première année de mon BTS.
              le but de ce projet était de faire la biographie de Rihanna.
              En parlant de ces réussites et de ces albums.
              pour en savoir plus sur ce projet vous avez la possibilité de le voir  dans son intégralité.
            </p>
            <button>
              {" "}
              <Link
                href={"https://svilalex.github.io/rihanna/"}
                passHref
                target="_blank"
              >
                Voir plus
              </Link>{" "}
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <em>Maison dhôtes</em>
            <div style={{ width: "250px", height: "180px" }}>
              <img src="assets/Maison d'hotes.png" alt="Maison" />
            </div>
            <p>
            C'est d'un projet personnel que j'ai réalisé au début de ma première de mon BTS.
            pour pouvoir approfondir mes connaissances en développement
              pour en savoir plus sur ce projet vous avez la possibilité de le voir  dans son intégralité.
            </p>
            <button>
              {" "}
              <Link
                href={"https://svilalex.github.io/projt/"}
                passHref
                target="_blank"
              >
                Voir plus
              </Link>{" "}
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <em>Mr Coffee</em>
            <div
              style={{ width: "250px", height: "180px", overflow: "hidden" }}
            >
              <img src="assets/mr.coffee.png" alt="coffee" />
            </div>
            <p>
              C'est un projet que j'ai réalisé lors d'une de mes formation en ligne.
              Le projet avait pour but de faire un site vitrine pour un café.
              pour en savoir plus sur ce projet vous avez la possibilité de le voir  dans son intégralité.
            </p>
            <button>
              {" "}
              <Link
                href={"https://svilalex.github.io/projet/index.html"}
                passHref
                target="_blank"
              >
                Voir plus
              </Link>{" "}
            </button>
          </div>
        </SwiperSlide>
      </SliderPresentation>
    </Container>
  );
};

const Container = styled.section`
  margin: 4rem 2rem 2rem;
  h2 {
    font-size: var(--h2-font-size);
    color: var(--first-color);
    margin-bottom: 1rem;
  }

  .swiper {
    padding-bottom: 2rem;
  }

  button {
    display: inline-block;
    background-color: var(--first-color);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
    transition: 0.4s;
    a {
      color: whitesmoke;
    }
    &:hover {
      background-color: var(--first-color-alt);
    }
    &:hover a {
      color: var(--body-color);
    }
  }
`;

export default Project;
