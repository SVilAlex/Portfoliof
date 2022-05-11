import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <Container id='home'>
      <div>
        <h1>Alexandra ST VIL</h1>
        <div>

        <Typewriter
          options={{
              strings: ['Bonjour', 'Bienvenue sur mon portfolio'],
              autoStart: true,
              loop: true,
            }}
            />
            </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
  div:first-child {
    margin-top: 8rem;
    text-align: center;

    div{
  display: flex;
  align-items: center;
  justify-content: center;
    }
  }
  h1 {
    font-size: var(--biggest-font-size);
    color: var(--title-color);
  }

  span{
      font-size: 2rem;
  }
`;

export default Home;
