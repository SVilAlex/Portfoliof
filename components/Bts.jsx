/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';

const Proposal = ({ option, text, arrayList }) => {
  return (
    <div>
      <em>{option} </em>
      <p>{text}</p>

      <ul>{arrayList && arrayList.map((item, index) => <li key={index}>{item}</li>)}</ul>
    </div>
  );
};

const Bts = () => {
  const optionSisr = ['Administrateur systèmes et réseaux', 'Informaticien support et déploiement', 'Pilote d’exploitation', 'Support systèmes et réseaux',
  'Technicien d’infrastructure', 'Technicien de production', 'Technicien micro et réseaux'];

  const optionSlam = [ 'Développeur d’applications informatiques','Développeur informatique', 'Analyste d’applications ou d’études', 'Analyste programmeur', 'Programmeur analyste', 'Programmeur d’applications', 'Responsable des services applicatifs', 'Technicien d’études informatiques'];

  return (
    <Container id="bts">
      <h2>Qu'est ce le BTS SIO ?</h2>
      <p>
      Le Brevet de Technicien Supérieur aux Services Informatiques aux Organisations (BTS SIO), s'adresse à ceux qui souhaitent se former en deux ans aux métiers d'administrateur réseau ou de développeur. Pour par la suite intégré directement le marché du travail ou continuer des études, dans le domaine de l'informatique.
      </p>

      <h3>Le BTS SIO propose deux spécialités</h3>
      <ContainerOptions>
        <Proposal
          option={'Option SISR'}
          text={
            'L’option Solution d’infrastructure, systèmes et réseaux forme des professionnels des réseaux et équipements informatiques (installation, maintenance, sécurité). En sortant d’un BTS SIO SISR, vous serez capables de gérer et d’administrer le réseau d’une société et d’assurer sa sécurité et sa maintenance.  Les techniciens supérieurs en informatique option SISR, peuvent accéder aux métiers de :'
          }
          arrayList={optionSisr}
        />
        <Proposal
          option={'Option SLAM'}
          text={
            'L’option Solutions logicielles et applications métiers forme des spécialistes des logiciels (rédaction d’un cahier des charges, formulation des besoins et spécifications, développement, intégration au sein de la société). Les techniciens supérieurs en informatique option SLAM, sont préparés aux métiers de :'
          }
          arrayList={optionSlam}
        />
      </ContainerOptions>
    </Container>
  );
};

const Container = styled.section`
  margin: 4rem 2rem auto;

  h2 {
    font-size: var(--h2-font-size);
    color: var(--first-color);
    margin-bottom: 1rem;
  }

  h3 {
    margin: 2rem auto 1rem;
    color: var(--first-color-alt);
  }

  p {
    font-size: var(--small-font-size);
  }
`;

const ContainerOptions = styled.div`

display: grid;
gap: 1rem;
  em {
    color: var(--first-color-alt);
  }

  p{
      font-size: var(--normal-font-size);
  }
`;
export default Bts;
