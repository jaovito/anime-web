import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  padding: 3%;
  border: 1px solid #eeef;
  border-radius: 8px;
  box-shadow: 1px 1px 6px 1px #eaeaeab8;

  margin: 5% auto;

  img {
    width: 100%;
    border-radius: 8px;

    box-shadow: 1px 1px 6px 1px #eaeaeab8;
  }
  > h1 {
    text-transform: capitalize;
    font-size: 2em;

    padding: 2vh 0;
  }
  span {
    letter-spacing: 0.8px;
    line-height: 2.8vh;

  }
`;
