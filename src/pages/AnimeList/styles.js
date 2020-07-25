import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100%;
  margin: 5vh 1vw;

  Form {
      display: flex;
      margin-bottom: 5vh;

      width: 80%;
  }

  @media(max-width: 700px) {
      display: flex;
  }

`;

export const List = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 70%;
    height: 100%;

    margin: 0 15px;

  img {
    height: 70%;
    border-radius: 8px 0 0 8px;
    margin-right: 1%;
    box-shadow: 1px 1px 6px 1px #eaeaeab8;

    @media(max-width: 700px) {
      width: 100%;
      height: auto;

    border-radius: 8px 8px 0 0;
  }
  }
  > h1 {
    text-transform: capitalize;
    font-size: 2em;

    padding: 2vh 0;
  }
  h2 {
    text-align: center;

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

    width: 100%;

  }

  @media(max-width: 700px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      width: 80%;
      height: auto;
  }

`