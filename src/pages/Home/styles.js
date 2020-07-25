import styled from 'styled-components';

export const Container = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: auto;
  padding: 3%;

  margin: 5% auto;

  img {
    width: 100%;
    border-radius: 8px 8px 0 0;

    box-shadow: 1px 1px 6px 1px #eaeaeab8;
  }
  > h1 {
    text-transform: capitalize;
    font-size: 2em;

    padding: 2vh 0;
  }
  h2 {
    align-self: flex-start;

    padding: 10px;
    margin-bottom: 15px;
    border-radius: 8px;

    background: #335dff;
    color: #fff;

    span {
      font-weight: bold;
    }
  }
  p {
    letter-spacing: 0.8px;
    line-height: 2.8vh;

  }
`;
