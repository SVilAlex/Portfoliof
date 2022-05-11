import styled from 'styled-components';
import Skill from './Skill';

const Skills = () => {
  const frontEnd = [{ title: 'Front-end', skillItem: [{name: 'HTML/CSS', level: 'confirmé'}, {name: 'Javascript', level: 'confirmé'}]}]
  const backEnd = [{ title: 'Back-end', skillItem: [{name: 'node', level: 'confirmé'}, {name: 'Express', level: 'confirmé'}]}]

  return (
    <Container id="skills">
      <h2>Mes compétences</h2>
      <ContainerSkill>

     <Skill skills={frontEnd} />
     <Skill skills={backEnd} />
      </ContainerSkill>
    </Container>
  );
};

const Container = styled.section`
  margin: 4rem 2rem 2rem ;

  h2 {
    font-size: var(--h2-font-size);
    color: var(--first-color);
    margin-bottom: 1rem;
  }
`;


const ContainerSkill = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 2rem;
`

export default Skills;
