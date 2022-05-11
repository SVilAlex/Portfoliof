/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import styled from "styled-components";
import { SwiperSlide } from "swiper/react";
import SliderPresentation from "./SliderPresentation";

const Update = () => {
  return (
    <Container id="veille">
      <h2>Veille technologique</h2>

      <div>
        <h3>Qu'est-ce que la veille technologique ?</h3>
        <p>
          La veille technologique, élément de la veille stratégique, consiste à
          surveiller les évolutions techniques, les innovations dans un secteur
          d’activité donnée. La veille technologique comprend notamment la
          surveillance, la collecte, le partage et la diffusion d’information
          permettant d’anticiper ou de s’informer sur des changements en matière
          de recherche, développement, brevet, lancement de nouveaux produits,
          matériaux, processus, concepts, innovation de fabrication, etc…. Cela
          a pour but d’évaluer l’impact sur l’environnement et l’organisation.
        </p>
      </div>

      <div id="veille">
        <h3>Sujet de ma veille</h3>
        <p id="veilleText">
          Pour la veille techologique, j'ai décidé de traiter sur le sujet de
          Postman et de React.
        </p>
        <SliderPresentation>
          <SwiperSlide>
            <Link
              href="https://learning.postman.com/docs/publishing-your-api/documenting-your-api/"
              target="_blank"
              passHref
            >
              <em>Postman</em>
            </Link>
            <p>
              Postman est une application permettant de tester des API, créée en
              2012 par Abhinav Asthana, Ankit Sobti et Abhijit Kane2 à Bangalore
              pour répondre à une problématique de test d'API partageable.
              D'abord module complémentaire de Google Chrome, puis client lourd,
              et finalement client léger, elle est à présent utilisée par plus
              de 500 000 entreprises dans le monde et a son siège à San
              Francisco Vous savez déjà qu’une API REST implique l’envoi de
              requêtes du client à l’API, qui passe la requête au serveur, l’API
              récupère la réponse et la renvoie enfin au client. Dans ce
              chapitre, nous allons voir comment formuler ces requêtes grâce à
              Postman. Cette interface graphique est utilisée par de nombreux
              développeurs. Elle facilite la construction de nos requêtes. 
            {" "}
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <Link href="https://fr.reactjs.org/" target="_blank" passHref>
              <em>React</em>
            </Link>
            <p>
              React (aussi appelé React.js ou ReactJS) est une bibliothèque
              JavaScript libre développée par Facebook depuis 2013. Le but
              principal de cette bibliothèque est de faciliter la création
              d'application web monopage, via la création de composants
              dépendant d'un état et générant une page (ou portion) HTML à
              chaque changement d'état. React est une bibliothèque qui ne gère
              que l'interface de l'application, considéré comme la vue dans le
              modèle MVC. Elle peut ainsi être utilisée avec une autre
              bibliothèque ou un framework MVC comme AngularJS. La bibliothèque
              se démarque de ses concurrents par sa flexibilité et ses
              performances, en travaillant avec un DOM virtuel et en ne mettant
              à jour le rendu dans le navigateur qu'en cas de nécessité.{" "}
            </p>
          </SwiperSlide>
        </SliderPresentation>
      </div>
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

  h3 {
    color: var(--first-color-alt);
  }
  #veilleText {
    margin-bottom: 2rem;
  }

  #veille {
    margin-top: 1rem;
  }

  .swiper-slide {
    background-color: var(--container-color);

    em {
      font-size: var(--normal-font-size);
      color: var(--first-color-alt);
      cursor: pointer;
    }
    p {
      font-size: var(--small-font-size);
      
    }
  }
`;

export default Update;
