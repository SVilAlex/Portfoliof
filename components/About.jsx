import Image from 'next/image';
import styled from 'styled-components';
import ActionButton from './ActionButton';
import photo from './alex.jpeg';
/*eslint-disable react/no-unescaped-entities*/
const About = () => {
  return (
    <Container id="about">
      <h2>À propos</h2>
      <Content>
        <div id="image">
          <Image src={photo} alt="" />
        </div>
        <div id="content">
          <div>
            <em>Présentation</em>
            <p>
            Je m'appelle Alexandra ST VIL, j'ai actuellement 22 ans et je suis étudiante en deuxième année BTS SIO SLAM à ENSITECH. 
            Ce que j'aime le plus dans l'informatique, c'est le web et l'aspect du design.
        Passionnée par ces domaines, J'ai pu acquérir des compétences et des connaissances.
    Durant ma première année de BTS, j'ai décidé de faire deux formation en ligne avec INCO Academy pour approfondir d'avantage mes expériences. 
    Durant ses deux formations, j'ai réalisé plusieurs des missions. <br></br>
 Pour plus d'informations, vous pouvez me contacter via la section contact qui se trouve en bas de la page. Vous pouvez également télécharger mon CV si vous le souhaitez.
 Vous trouverez aussi mon tableau de synthèse.
            </p>
            <ActionButton />
          </div>
        </div>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  margin: 2rem 2rem auto;

  h2 {
    color: var(--first-color);
  }

  #image {
    width: 300px;
    height: 300px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
  }
  img {
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 0.5rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.5rem;
  margin-top: 3rem;

  #content {
    display: grid;
    gap: 2rem;
    
    div:first-child{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    em {
      font-size: var(--h2-font-size);
      margin-bottom: 1rem;
      color: #a59df5;
    }
  }
`;
export default About;
