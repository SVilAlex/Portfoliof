import Image from 'next/image';
import styled from 'styled-components';
import proImage from '../public/assets/illustration-pro.png';
import learning from '../public/assets/learning.png';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useState } from 'react';

const Cursus = () => {
  const [open, setOpen] = useState(false);
  const [model, setModel] = useState(null);

  const professionnel = [
    {
      title: 'Expérience',
      image: proImage,
      description: 'description',
      detail: [
        { date: 'Février / Mars 2022', post: 'Apprentissage', place: 'Ensitech', adress: 'Cergy (95)', desc: "Finalisation des mes projets fin d'étude" },
        { date: 'Juin / Juillet 2021', post: 'Assistante développeur Web ', place: 'AMLOGIK', adress: 'Villiers Le Sec (95)', desc: 'Développement d’un site Internet avec le langage WinDev' },
        { date: 'Mai / Juin 2019', post: 'Technicienne de laboratoire', place: 'Fontaas et Cie', adress: 'Paris (75)', desc: 'Traitement et transformation des bijoux (or, argent, rhodium)' },
      ],
    },
  ];

  const education = [
    {
      title: 'Education',
      image: learning,
      description: 'description',
      detail: [
        { date: '2022 /2023', post: "Bachelor Concepteur Développeur d'Applications", place: "Doranco Ecole sup' des Tech Créative", lieu: 'Bagnolet (93)' },
        { date: '2020 / 2022', post: 'BTS SIO SLAM en initial', place: 'Ensitech', lieu: 'Cergy (95)' },
        { date: 'Janv. / Avril 2021', post: 'Certification Incode – Développeur fullstack Javascript', place: 'Inco Academy', lieu: 'En ligne' },
        { date: 'Novembre 2020', post: 'Certification bootcamp Get Into Tech – les métiers de la tech', place: 'Inco Academy', lieu: 'En ligne' },
        { date: '2018 / 2020', post: 'BTS Traitement Des Matériaux', place: 'Lycée Condorcet' , lieu: 'Montreuil (93)'},
        { date: '2017 / 2018', post: 'Baccalauréat Sciences et Technologies de Laboratoire', place: 'Lycée Blaise Cendras', lieu: 'Sevran (93)' },
    ],
    },
  ];

  const handle = (data) => {
    data === 'Expérience' ? setModel(professionnel) : setModel(education);
    setOpen(!open);
  };


  return (
    <Container id='cursus'>
      <h2>Mon parcours</h2>
      <Content>
        {professionnel.map((item, index) => (
          <Card className="box" key={index}>
            <div style={{ width: '150px' }}>
              <Image src={item.image} alt="" layout="responsive" />
            </div>
            <span onClick={() => handle(item.title)}>
              Voir plus <i className="bx bx-right-arrow-alt"></i>
            </span>
          </Card>
        ))}

        {education.map((item, index) => (
          <Card className="box" key={index}>
            <div style={{ width: '150px' }}>
              <Image src={item.image} alt="" layout="responsive" />
            </div>
            <span onClick={() => handle(item.title)}>
              Voir plus <i className="bx bx-right-arrow-alt"></i>
            </span>
          </Card>
        ))}
      </Content>
      {model && (
        <Modal open={open} onClose={handle} center closeIcon={<i className="bx bx-x"></i>}>
          <h2>{model[0].title}</h2>
          <p id="desc">{model.description}</p>

          <List>
            {model[0].detail.map((item) => (
              <li key={item._key}>
                <i className="bx bxs-circle"></i>
                <div>
                  <p>{item.date} </p>
                  <p>{item.post}</p>
                  <p>{item.place}</p>
                  <p>{item.adress}</p>
                  <p>{item.desc}</p>
                  <p>{item.lieu}</p>

                </div>
              </li>
            ))}
          </List>
        </Modal>
      )}
    </Container>
  );
};

const Container = styled.div`
  margin: 4rem 2rem 2rem;

  h2 {
    font-size: var(--h2-font-size);
    color: var(--first-color);
    margin-bottom: 1rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  display: grid;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 2.5rem;
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 1.25rem;
  /* For medium devices */
  @media screen and (min-width: 576px) {
    padding: 1rem 1rem;
  }
  span {
    display: flex;
    column-gap: 0.25rem;
    align-items: center;
    color: var(--first-color);
    font-size: var(--small-font-size);
    cursor: pointer;
    &:hover i {
      transform: translateX(0.25rem);
    }
    i {
      font-size: 1rem;
      transition: 0.4s;
    }
  }
  /* For small devices */
  @media screen and (max-width: 320px) {
    column-gap: 1rem;
  }
`;

const List = styled.ul`
  position: relative;
  display: grid;
  row-gap: 1.75rem;
  &::before {
    content: '';
    position: absolute;
    left: 5px;
    width: 100%;
    height: 100%;
    border-left: 1.7px solid var(--first-color);
  }
  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    p:nth-child(1) {
      font-size: var(--small-font-size);
      color: var(--first-color);
    }
    p:nth-child(3) {
      font-size: var(--small-font-size);
    }
    i {
      font-size: 0.75rem;
      color: var(--first-color);
      z-index: var(--z-tooltip);
    }
  }
`;
export default Cursus;
