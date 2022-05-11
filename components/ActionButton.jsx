import styled from 'styled-components';
import { saveAs } from 'file-saver';

const ActionButton = () => {
  const download = (e, file, name) => {
    e.preventDefault();
    saveAs(file, name);
  };

  return (
    <Container>
      <button>
        <a onClick={(e) => download(e, 'assets/Cv.pdf', 'CV Alexandra STVIL')}>Téléchager le CV</a>{' '}
      </button>
      <button>
        <a onClick={(e) => download(e, 'assets/Tableau_de_synthese.pdf', 'Tableau de synthese Alexandra STVIL')}>
          Tableau de synthèse
        </a>{' '}
      </button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: 'center';
  gap: 2rem;

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

export default ActionButton;
