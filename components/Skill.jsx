import styled from 'styled-components';

const Skill = ({skills}) => {
  return (
    <>
      {skills.map((el) => (
        <Content key={el._key} className="box">
          <h3>{el.title} </h3>
          <Card>
            {el.skillItem&& el.skillItem.map((item) => (
              <Item key={item._key}>
                <i className="bx bxs-badge-check"></i>

                <div>
                  <h3 className="skills__name">{item.name} </h3>
                  <span className="skills__level">{item.level} </span>
                </div>
              </Item>
            ))}
          </Card>
        </Content>
      ))}
    </>
  );
};



const Content = styled.div`
  background-color: var(--container-color);
  padding: 1.5rem;
  border-radius: 1.25rem;
  h3 {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
    color: var(--first-color);
    text-align: center;
    margin-bottom: 1.5rem;
  }
  /* For medium devices */
  @media screen and (min-width: 576px) {
    padding: 2rem 2.2rem;
  }
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 100px);
  gap: 1.5rem;
  justify-content: center;
  /* For small devices */
  @media screen and (max-width: 320px) {
    column-gap: 1rem;
  }
  /* For large devices */
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Item = styled.div`
  display: flex;
  column-gap: 0.5rem;
  i {
    font-size: 1rem;
    color: var(--first-color);
  }
  div {
    display: flex;
    flex-direction: column;
    column-gap: 0.5rem;
    align-items: flex-start;

    h3 {
      font-size: var(--normal-font-size);
      font-weight: var(--fotn-medium);
      line-height: 18px;
      margin-bottom: 0.5rem;
      text-align: left;
    }
    span {
      font-size: var(--tiny-font-size);
    }
  }
`;

export default Skill;
